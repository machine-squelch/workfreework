"use client";

import { useState, useRef } from "react";

type Msg = { role: "user" | "assistant"; content: any };

export default function RonnyPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const newHistory: Msg[] = [...messages, userMsg];
    setMessages(newHistory);
    setLoading(true);
    try {
      const res = await fetch("/api/ronny", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: newHistory,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Agent error");
      let assistantContent = "";
      if (Array.isArray(data?.content)) {
        assistantContent = data.content
          .map((block: any) => (typeof block?.text === "string" ? block.text : ""))
          .join("\n")
          .trim();
      } else if (typeof data?.content === "string") {
        assistantContent = data.content;
      } else if (typeof data?.output === "string") {
        assistantContent = data.output;
      } else {
        assistantContent = JSON.stringify(data);
      }
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
    <div className="mx-auto max-w-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <img src="/ronny-robot.png" alt="Ronny the Robot" width={48} height={48} className="rounded" />
        <div>
          <h1 className="text-2xl font-semibold">Ronny the Robot</h1>
          <p className="text-sm text-gray-500">Your laid-back, ultra-smart assistant</p>
        </div>
      </div>

      <div ref={listRef} className="border rounded-md p-4 h-[420px] overflow-y-auto bg-white/50">
        {messages.length === 0 ? (
          <div className="text-gray-500 text-sm">Ask me anything—alright, alright, alright.</div>
        ) : (
          <div className="space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={
                    "inline-block px-3 py-2 rounded-md " +
                    (m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900")
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

      <div className="mt-4 flex gap-2">
        <input
          className="flex-1 border rounded-md px-3 py-2"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={loading}
        />
        <button
          onClick={send}
          disabled={loading}
          className="px-4 py-2 rounded-md bg-black text-white disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
