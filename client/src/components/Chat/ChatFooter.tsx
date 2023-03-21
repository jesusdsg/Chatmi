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
        message,
      };
      socket.emit("event_message", body);
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="px-8 py-4 bg-dark-2 w-full rounded-b-sm border-t border-dark-3 h-1/4">
      <form className="flex gap-2 m-auto items-center">
        <div className="w-3/4">
          <input
            type="text"
            name="message"
            className="text-white rounded-sm bg-dark-2 px-6 py-2 border border-dark-3 w-full focus:outline-none focus:border-green-1 duration-300 hover:border-green-2"
            onChange={(e) => handleChange(e)}
            placeholder="Write a message..."
            value={message}
          ></input>
        </div>
        <div className="w-1/4">
          <button
            type="submit"
            className="bg-green-1 hover:bg-green-2 duration-300 px-8 py-2 border-none rounded-sm w-auto  hover:shadow-md flex items-center gap-2 focus:outline-none"
            onClick={(e) => sendMessage(e)}
          >
            Send
            <BiPaperPlane size="1.2rem" />
          </button>
        </div>
      </form>
    </div>
  );
}
