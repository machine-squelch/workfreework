import { NextRequest } from "next/server";

const MAX_BYTES = 512 * 1024; // 512KB safety cap

export async function POST(req: NextRequest) {
  try {
    const { url, timeoutMs = 15000 }: { url?: string; timeoutMs?: number } = await req
      .json()
      .catch(() => ({} as any));

    if (!url || typeof url !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing required 'url' string" }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    // Basic allow-list: http(s) only
    try {
      const u = new URL(url);
      if (u.protocol !== "http:" && u.protocol !== "https:") {
        return new Response(
          JSON.stringify({ error: "Only http/https URLs are allowed" }),
          { status: 400, headers: { "content-type": "application/json" } }
        );
      }
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid URL" }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), Math.max(1000, Math.min(30000, timeoutMs)));

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "user-agent": "WFW-Tools-Fetch/1.0",
      },
      signal: controller.signal,
      redirect: "follow",
    }).catch((e) => {
      throw new Error(`Fetch failed: ${e?.message || e}`);
    });
    clearTimeout(to);

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Upstream error", status: res.status }),
        { status: 502, headers: { "content-type": "application/json" } }
      );
    }

    const contentType = res.headers.get("content-type") || "";
    const isText = /^(text\/.+|application\/json|application\/xml|application\/javascript)/i.test(
      contentType
    );

    // Enforce size cap
    const reader = res.body?.getReader();
    if (!reader) {
      const text = await res.text();
      const truncated = text.slice(0, MAX_BYTES);
      return new Response(
        JSON.stringify({ contentType, body: truncated, truncated: truncated.length < text.length }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }

    let received = 0;
    const chunks: Uint8Array[] = [];
    // Stream and cap
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        received += value.byteLength;
        if (received > MAX_BYTES) {
          chunks.push(value.subarray(0, MAX_BYTES - (received - value.byteLength)));
          break;
        }
        chunks.push(value);
      }
    }

    const buffer = Buffer.concat(chunks);
    if (!isText) {
      return new Response(
        JSON.stringify({ contentType, body: "[binary omitted]", truncated: true }),
        { status: 200, headers: { "content-type": "application/json" } }
      );
    }

    const body = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
    return new Response(
      JSON.stringify({ contentType, body, truncated: received >= MAX_BYTES }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error)?.message || "Unexpected error" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}


