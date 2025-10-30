"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: any };

export default function RonnyWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight }), 50);
    }
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const newHistory: Msg[] = [...messages, userMsg];
    setMessages(newHistory);
    setLoading(true);
    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          use_ronny_defaults: true,
          messages: newHistory,
          max_tokens: 1024,
          temperature: 0.3,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Agent error");
      const assistantRaw = data?.message;
      const assistantContent =
        typeof assistantRaw?.content === "string"
          ? assistantRaw.content
          : JSON.stringify(assistantRaw?.content ?? "(no response)");
      const assistant: Msg = { role: "assistant", content: assistantContent };
      setMessages((prev) => [...prev, assistant]);
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Uh oh—${e?.message || e}. Try again.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.keyCode === 13) && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        aria-label="Open Ronny"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-40 shadow-lg rounded-full bg-white border hover:scale-105 transition-transform"
        style={{ width: 56, height: 56 }}
      >
        <img src="/ronny-robot.png" alt="Ronny" width={56} height={56} className="rounded-full" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-40 w-[360px] max-w-[95vw] shadow-xl border rounded-xl bg-white overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b bg-gray-50">
            <div className="flex items-center gap-2">
              <img src="/ronny-robot.png" alt="Ronny" width={28} height={28} className="rounded" />
              <div className="text-sm font-medium">Ronny the Robot</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-800 text-sm">Close</button>
          </div>
          <div ref={listRef} className="p-3 h-[360px] overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-sm">Ask me anything—alright, alright, alright.</div>
            ) : (
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                    <div
                      className={
                        "inline-block px-3 py-2 rounded-md " +
                        (m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900")
                      }
                    >
                      {typeof m.content === "string" ? m.content : JSON.stringify(m.content)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="text-left">
                    <div className="inline-block px-3 py-2 rounded-md bg-gray-100 text-gray-500">
                      Ronny is thinking…
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="p-3 flex gap-2 border-t">
            <input
              className="flex-1 border rounded-md px-3 py-2"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={loading}
            />
            <button onClick={send} disabled={loading} className="px-3 py-2 rounded-md bg-black text-white disabled:opacity-50">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}


