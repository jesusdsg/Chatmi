import React, { useState } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { userStore } from "src/store/user";
import EmojiPicker from "emoji-picker-react";
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
  const [showEmojis, setShowEmojis] = useState<boolean>(false);
  const username = userStore((state: any) => state.username);
  const setEmoji = (e: any) => {
    setMessage(message + e.emoji);
    setShowEmojis(false);
  };
  const sendMessage = (e: any) => {
    e.preventDefault();
    if (!!username) {
      const body = {
        body: message,
        from: username,
      };
      socket.emit("event_message", body);
      setMessage("");
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-8 py-4 bg-dark-1 w-full rounded-br-md border-t border-dark-2 h-20 md:h-1/4 lg:h-1/4">
      <form className="flex gap-10 m-auto items-center">
        <div className={!showEmojis ? "hidden" : "absolute h-20 bottom-3/4"}>
          <EmojiPicker onEmojiClick={(e) => setEmoji(e)} height={300} />
        </div>

        <div className="w-3/4">
          <input
            type="text"
            name="message"
            className="text-white rounded-md bg-dark-2 px-6 py-2 border border-dark-3 w-full focus:outline-none focus:border-green-1 duration-300 hover:border-green-2"
            onChange={(e) => handleChange(e)}
            placeholder="Write a message..."
            value={message}
          />
          <button
            className="text-dark-3 inline absolute mx-2 my-2 cursor-pointer hover:text-dark-2 duration-300"
            type="button"
            onClick={() => setShowEmojis(!showEmojis)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </button>
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
