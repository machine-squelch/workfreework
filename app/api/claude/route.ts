import { NextRequest } from "next/server";

type ClaudeMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing ANTHROPIC_API_KEY on server" }),
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }

    const {
      messages = [],
      system,
      model = "claude-3-5-sonnet-latest",
      max_tokens = 1024,
      temperature = 0,
      tools,
      tool_choice,
    }: {
      messages?: ClaudeMessage[];
      system?: string;
      model?: string;
      max_tokens?: number;
      temperature?: number;
      tools?: unknown[];
      tool_choice?: unknown;
    } = body || {};

    const userAndAssistantMessages = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));

    const payload = {
      model,
      max_tokens,
      temperature,
      messages: userAndAssistantMessages,
      system,
      tools,
      tool_choice,
    } as Record<string, unknown>;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return new Response(
        JSON.stringify({ error: "Anthropic API error", status: res.status, details: text }),
        { status: 502, headers: { "content-type": "application/json" } }
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Unhandled error", details: (err as Error)?.message }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}


