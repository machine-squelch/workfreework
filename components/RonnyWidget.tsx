"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

type AccessState = "loading" | "limited" | "full";

const MAX_INPUT_CHARS = 500;
const COOLDOWN_MS = 2500;
const RONNY_HISTORY = 8;

function extractText(payload: any): string {
  if (Array.isArray(payload?.content)) {
    return payload.content
      .map((block: any) => (typeof block?.text === "string" ? block.text : ""))
      .join("\n")
      .trim();
  }

  if (typeof payload?.content === "string") {
    return payload.content.trim();
  }

  if (typeof payload?.output === "string") {
    return payload.output.trim();
  }

  return "I hit an unexpected response. Please try again in a moment.";
}

export default function RonnyWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [access, setAccess] = useState<AccessState>("loading");
  const [unlockCode, setUnlockCode] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const fetchCsrfToken = useCallback(async () => {
    try {
      const res = await fetch("/api/ronny/csrf", {
        method: "GET",
        credentials: "same-origin",
        cache: "no-store",
      });
      const data = await res.json().catch(() => ({}));
      const token = data?.token || null;
      setCsrfToken(token);
      return token;
    } catch {
      setCsrfToken(null);
      return null;
    }
  }, []);

  const fetchAccessStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/ronny/status", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      setAccess(data?.status === "full" ? "full" : "limited");
    } catch {
      setAccess("limited");
    }
  }, []);

  useEffect(() => {
    fetchCsrfToken();
    fetchAccessStatus();
  }, [fetchCsrfToken, fetchAccessStatus]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!cooldown) return;
    const id = setTimeout(() => setCooldown(false), COOLDOWN_MS);
    return () => clearTimeout(id);
  }, [cooldown]);

  async function ensureCsrfToken() {
    if (csrfToken) return csrfToken;
    return fetchCsrfToken();
  }

  async function send() {
    const trimmed = input.trim().slice(0, MAX_INPUT_CHARS);
    if (!trimmed || loading || cooldown) return;

    const token = await ensureCsrfToken();
    if (!token) {
      setError("Unable to verify session. Refresh and try again.");
      return;
    }

    const nextHistory = [...messages, { role: "user" as const, content: trimmed }].slice(-RONNY_HISTORY);
    setMessages(nextHistory);
    setInput("");
    setLoading(true);
    setError(null);
    setCooldown(true);

    try {
      const res = await fetch("/api/ronny", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-CSRF-Token": token,
        },
        body: JSON.stringify({ messages: nextHistory }),
        cache: "no-store",
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "Ronny is offline. Please try again later.");
        return;
      }

      if (data?.limited) {
        setAccess("limited");
      }

      const reply = extractText(data);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: any) {
      setError(err?.message || "Network error. Try again soon.");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  async function unlock() {
    const code = unlockCode.trim();
    if (!code || unlocking) return;

    const token = await ensureCsrfToken();
    if (!token) {
      setError("Unable to verify session. Refresh and try again.");
      return;
    }

    setUnlocking(true);
    setError(null);
    try {
      const res = await fetch("/api/ronny/unlock", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-CSRF-Token": token,
        },
        body: JSON.stringify({ code }),
        cache: "no-store",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "Unable to unlock. Check your code.");
        return;
      }
      setAccess("full");
      setUnlockCode("");
      setMessages([]);
    } catch (err: any) {
      setError(err?.message || "Network error while unlocking.");
    } finally {
      setUnlocking(false);
    }
  }

  const disabled = loading || cooldown;

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 60 }} aria-live="polite">
      {open ? (
        <div
          className="w-80 sm:w-96 rounded-2xl shadow-2xl border-2 border-white neon-border neon-backglow--white bg-gray-900 text-white"
          role="dialog"
          aria-label="Ronny the Robot chat"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <div>
              <p className="font-semibold">Ronny the Robot</p>
              <p className="text-xs text-gray-400">
                {access === "full" ? "Full Power" : access === "loading" ? "Checking access…" : "Ronny Lite"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white"
            >
              Close
            </button>
          </div>
          <div ref={listRef} className="px-4 py-3 h-72 overflow-y-auto space-y-3 bg-gray-800">
            {messages.length === 0 && !loading && (
              <p className="text-sm text-gray-400">
                Ask about automation systems, pricing tiers, or where to start.
              </p>
            )}
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-2xl px-3 py-2 text-sm max-w-[80%] whitespace-pre-wrap break-words ${
                    msg.role === "user" ? "bg-sky-600" : "bg-gray-700"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-xs text-gray-400">Ronny is thinking…</p>}
            {error && (
              <p className="text-xs text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>
          <div className="px-4 py-3 border-t border-gray-700 space-y-2">
            <input
              type="text"
              maxLength={MAX_INPUT_CHARS}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask Ronny anything"
              className="w-full rounded-xl border border-gray-600 bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              disabled={disabled}
            />
            <button type="button" onClick={send} disabled={disabled} className="w-full btn-glass disabled:opacity-50">
              {cooldown ? "Cooling down" : loading ? "Sending…" : "Send"}
            </button>
            {access === "limited" && (
              <div className="rounded-xl border border-amber-500 bg-amber-500/10 p-3 space-y-2">
                <p className="text-xs text-amber-200">
                  You're on Ronny Lite. Members get deeper playbooks and tactical breakdowns.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={unlockCode}
                    onChange={(e) => setUnlockCode(e.target.value)}
                    placeholder="Enter member code"
                    className="flex-1 rounded-lg border border-amber-400 bg-transparent px-2 py-1 text-xs focus:outline-none"
                    disabled={unlocking}
                  />
                  <button
                    type="button"
                    onClick={unlock}
                    disabled={unlocking || !unlockCode.trim()}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-amber-500 text-black disabled:opacity-60"
                  >
                    {unlocking ? "Unlocking…" : "Unlock"}
                  </button>
                </div>
                <p className="text-[10px] text-amber-200">
                  Members: find your code in the welcome email or dashboard.
                </p>
              </div>
            )}
            <p className="text-[10px] text-gray-500">
              Protected with CSRF, rate limiting, and subscription gating. Please avoid sharing sensitive data.
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border-4 border-white shadow-xl w-18 h-18 flex items-center justify-center bg-gray-900 hover:scale-105 transition"
          aria-label="Open Ronny chatbot"
        >
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/80">
            <img src="/ronny-robot.png" alt="Ronny" className="w-full h-full object-cover object-top" />
          </div>
        </button>
      )}
    </div>
  );
}
