import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

type SearchResult = {
  file: string;
  matches: Array<{ line: number; text: string }>;
};

const SEARCH_ROOTS = [
  "public",
  "app",
  "components",
];

const ALLOWED_EXTS = new Set([".md", ".mdx", ".txt", ".tsx", ".ts"]);

function* walk(dir: string): Generator<string> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else {
      yield p;
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const { query, maxFiles = 40, maxMatchesPerFile = 6 }: { query?: string; maxFiles?: number; maxMatchesPerFile?: number } = await req
      .json()
      .catch(() => ({} as any));

    if (!query || typeof query !== "string" || query.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: "Provide 'query' (≥2 chars)" }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const root = process.cwd();
    const results: SearchResult[] = [];
    let filesScanned = 0;
    const needle = query.toLowerCase();

    for (const relRoot of SEARCH_ROOTS) {
      const abs = path.join(root, relRoot);
      if (!fs.existsSync(abs)) continue;
      for (const file of walk(abs)) {
        const ext = path.extname(file).toLowerCase();
        if (!ALLOWED_EXTS.has(ext)) continue;
        filesScanned++;
        if (filesScanned > 1500) break; // safety
        try {
          const content = fs.readFileSync(file, "utf8");
          const lines = content.split(/\r?\n/);
          const matches: Array<{ line: number; text: string }> = [];
          for (let i = 0; i < lines.length && matches.length < maxMatchesPerFile; i++) {
            const lineText = lines[i];
            if (lineText.toLowerCase().includes(needle)) {
              matches.push({ line: i + 1, text: lineText.slice(0, 320) });
            }
          }
          if (matches.length) {
            results.push({ file: path.relative(root, file), matches });
            if (results.length >= maxFiles) break;
          }
        } catch {}
      }
    }

    return new Response(
      JSON.stringify({ query, results }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error)?.message || "Unexpected error" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}


