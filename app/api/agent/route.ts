import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

type ClaudeMessage = {
  role: "system" | "user" | "assistant";
  content: any;
};

type ToolUse = {
  id: string;
  type: "tool_use";
  name: string;
  input: Record<string, unknown>;
};

const DEFAULT_MODEL = "claude-3-5-sonnet-latest";
const MAX_STEPS = 6;

async function callClaude(apiKey: string, payload: Record<string, unknown>) {
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
    throw new Error(`Anthropic error ${res.status}: ${text}`);
  }
  return res.json();
}

async function runTool(baseUrl: string, tool: ToolUse) {
  try {
    if (tool.name === "fetch_url") {
      const r = await fetch(`${baseUrl}/api/tools/fetch`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          url: tool.input?.url,
          timeoutMs: tool.input?.timeoutMs ?? 15000,
        }),
      });
      const data = await r.json();
      return { ok: r.ok, data };
    }
    if (tool.name === "search_repo") {
      const r = await fetch(`${baseUrl}/api/tools/search`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          query: tool.input?.query,
          maxFiles: tool.input?.maxFiles ?? 40,
          maxMatchesPerFile: tool.input?.maxMatchesPerFile ?? 6,
        }),
      });
      const data = await r.json();
      return { ok: r.ok, data };
    }
    return { ok: false, data: { error: `Unknown tool: ${tool.name}` } };
  } catch (e: any) {
    return { ok: false, data: { error: e?.message || String(e) } };
  }
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing ANTHROPIC_API_KEY on server" }),
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const {
      messages = [],
      system,
      model = DEFAULT_MODEL,
      max_tokens = 1024,
      temperature = 0,
      use_ronny_defaults = false,
      tools = [
        {
          name: "fetch_url",
          description: "Fetch a URL and return text content; binary is omitted.",
          input_schema: {
            type: "object",
            properties: { url: { type: "string" }, timeoutMs: { type: "number" } },
            required: ["url"],
          },
        },
        {
          name: "search_repo",
          description: "Search repository files for a query string.",
          input_schema: {
            type: "object",
            properties: {
              query: { type: "string" },
              maxFiles: { type: "number" },
              maxMatchesPerFile: { type: "number" },
            },
            required: ["query"],
          },
        },
      ],
      tool_choice,
    }: {
      messages?: ClaudeMessage[];
      system?: string;
      model?: string;
      max_tokens?: number;
      temperature?: number;
      use_ronny_defaults?: boolean;
      tools?: unknown[];
      tool_choice?: unknown;
    } = body || {};

    const baseUrl = `${req.nextUrl.protocol}//${req.headers.get("host")}`;

    // Construct Ronny system if requested
    let mergedSystem = system;
    if (use_ronny_defaults) {
      const ronnyVoice = `You are Ronny the Robot, an ultra-smart assistant with the laid-back charm of Matthew McConaughey.\nGuidelines:\n- Be warm, concise, and a little playful; think "alright, alright, alright" energy.\n- Give clear, actionable answers with short steps.\n- Ask one focused follow-up question when needed.\n- Prefer up-to-date, specific info via tools.\n- Stay helpful and positive.`;
      let facts = "";
      try {
        const factsPath = path.join(process.cwd(), "public", "company-facts.md");
        facts = fs.readFileSync(factsPath, "utf8");
      } catch {}
      mergedSystem = [ronnyVoice, "\n--- Company Facts ---\n", facts].filter(Boolean).join("\n");
    }

    // Normalize messages to Claude format: content as string or array
    const history = messages.map((m) => ({ role: m.role, content: m.content }));

    let step = 0;
    while (step < MAX_STEPS) {
      step++;
      const payload: Record<string, unknown> = {
        model,
        max_tokens,
        temperature,
        messages: history,
        system: mergedSystem,
        tools,
      };
      if (tool_choice !== undefined) payload.tool_choice = tool_choice as any;

      const result = await callClaude(apiKey, payload);
      const assistantMsg = {
        role: "assistant",
        content: result?.content ?? [],
      } as ClaudeMessage;
      history.push(assistantMsg);

      const toolUses: ToolUse[] = (assistantMsg.content || []).filter(
        (c: any) => c?.type === "tool_use"
      );

      if (!toolUses.length) {
        return new Response(
          JSON.stringify({ model, stop_reason: result?.stop_reason, message: assistantMsg }),
          { status: 200, headers: { "content-type": "application/json" } }
        );
      }

      // Execute tools and append tool_result message
      const toolResults: any[] = [];
      for (const tu of toolUses) {
        const exec = await runTool(baseUrl, tu);
        toolResults.push({
          type: "tool_result",
          tool_use_id: tu.id,
          content: JSON.stringify(exec.data).slice(0, 100000),
          is_error: exec.ok ? false : true,
        });
      }

      history.push({ role: "user", content: toolResults });
    }

    return new Response(
      JSON.stringify({ error: "Max tool steps reached" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error)?.message || "Unexpected error" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}


