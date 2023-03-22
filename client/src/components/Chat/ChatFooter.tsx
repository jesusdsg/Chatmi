import React, { useEffect, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
export default function ChatFooter({
  socket,
  messages,
  setMessages,
  room,
}: any) {
  const [message, setMessage] = useState<string>("");
  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (!!room) {
      const body = {
        room: room.name,
        body: message,
        from: "Me",
      };
      socket.emit("event_message", body);
      setMessages([body, ...messages]);
      setMessage("");
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-8 py-4 bg-dark-1 w-full rounded-br-md border-t border-dark-2 h-20 md:h-1/4 lg:h-1/4">
      <form className="flex gap-2 m-auto items-center">
        <div className="w-3/4">
          <input
            type="text"
            name="message"
            className="text-white rounded-md bg-dark-2 px-6 py-2 border border-dark-3 w-full focus:outline-none focus:border-green-1 duration-300 hover:border-green-2"
            onChange={(e) => handleChange(e)}
            placeholder="Write a message..."
            value={message}
          ></input>
        </div>
        <div className="w-1/4">
          <button
            type="submit"
            className="bg-green-1 hover:bg-green-2 duration-300 px-8 py-2 border-none rounded-md w-auto  hover:shadow-md flex items-center gap-2 focus:outline-none"
            onClick={(e) => sendMessage(e)}
          >
            <span className="hidden md:block lg:block">Send</span>
            <BiPaperPlane size="1.5rem" />
          </button>
        </div>
      </form>
    </div>
  );
}
