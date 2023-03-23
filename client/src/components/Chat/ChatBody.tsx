import uuid from "react-uuid";
interface ChatBodyProps {
  messages: Array<any>;
}

export default function ChatBody({ messages }: ChatBodyProps) {
  return (
    <div className="bg-dark-1 px-8 py-4 rounded-r-md h-60 md:h-3/4 lg:h-3/4 overflow-y-scroll">
      {messages.map((message, index): any => {
        return (
          <div key={uuid()} className="flex gap-2 items-center mb-3">
            <span className="text-green-1">{message.from}:</span>
            <div className="bg-dark-2 py-2 px-4 rounded-md">{message.body}</div>
          </div>
        );
      })}
    </div>
  );
}
