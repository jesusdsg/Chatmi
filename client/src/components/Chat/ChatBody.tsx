import React from "react";

interface ChatBodyProps {
  messages: Array<any>;
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className="min-h-full bg-dark-2 px-8 py-4 rounded-r-sm h-3/4">
      {messages.map((message, index): any => {
        return <div key={index}>{message}</div>;
      })}
    </div>
  );
}
