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
        className="fixed bottom-6 right-6 z-40 shadow-lg rounded-full bg-white border hover:scale-105 transition-transform w-16 h-16 md:w-20 md:h-20"
      >
        <img src="/ronny-robot.png" alt="Ronny" className="rounded-full w-full h-full object-cover" />
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-28 right-4 md:right-6 z-40 w-[360px] md:w-[480px] max-w-[95vw] shadow-2xl border rounded-2xl bg-white overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-gray-50">
            <div className="flex items-center gap-2">
              <img src="/ronny-robot.png" alt="Ronny" width={32} height={32} className="rounded" />
              <div className="text-sm md:text-base font-medium">Ronny the Robot</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-800 text-sm">Close</button>
          </div>
          <div ref={listRef} className="p-4 h-[420px] md:h-[560px] overflow-y-auto bg-white">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-sm">Ask me anything—alright, alright, alright.</div>
            ) : (
              <div className="space-y-4">
                {messages.map((m, i) => {
                  const isUser = m.role === "user";
                  return (
                    <div key={i} className={isUser ? "flex justify-end" : "flex justify-start"}>
                      <div
                        className={
                          (isUser
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900") +
                          " rounded-2xl px-4 py-3 shadow-md max-w-[80%] md:max-w-[75%] whitespace-pre-wrap leading-relaxed"
                        }
                      >
                        {typeof m.content === "string" ? m.content : JSON.stringify(m.content)}
                      </div>
                    </div>
                  );
                })}
                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl px-4 py-3 bg-gray-100 text-gray-500 shadow-md">
                      Ronny is thinking…
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="p-4 flex gap-2 border-t bg-gray-50">
            <input
              className="flex-1 border rounded-xl px-3 py-3 text-[15px]"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={loading}
            />
            <button onClick={send} disabled={loading} className="px-4 py-3 rounded-xl bg-black text-white disabled:opacity-50">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}


