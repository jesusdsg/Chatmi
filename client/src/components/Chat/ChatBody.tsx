import React from "react";

interface ChatBodyProps {
  messages: Array<any>;
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className="min-h-full h-full bg-dark-2 px-8 py-4 rounded-r-sm">
      {messages.map((message, index): any => {
        return <div key={index}>{message}</div>;
      })}
    </div>
  );
}
