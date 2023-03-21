import React from "react";

interface ChatBodyProps {
  messages: Array<any>;
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className="bg-dark-1 px-8 py-4 rounded-r-md h-3/4 overflow-y-scroll">
      {messages.map((message, index): any => {
        return <div key={index}>{message}</div>;
      })}
    </div>
  );
}
