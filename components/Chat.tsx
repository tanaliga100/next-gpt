"use client";
import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const {
    mutate: sendMessage,
    data,
    isPending,
  } = useMutation({
    mutationFn: (msg) => generateChatResponse(msg),
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setText("");
    sendMessage(text as any);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            ask question
          </button>
        </div>
      </form>
    </div>
  );
}
