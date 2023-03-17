import Layout from "@layouts/Layout";
import React, { useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import ChatFooter from "./ChatFooter";

export default function Chat({ socket }: any) {
  const [messages, setMessages] = useState<any>([]);
  return (
    <Layout>
      <div className="grid grid-rows-3 grid-flow-col">
        <div className="row-span-3">
          <ChatList />
        </div>
        <div className="col-span-2">
          <ChatBody messages={messages} />
        </div>
        <div className="row-span-2 col-span-2">
          <ChatFooter
            socket={socket}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      </div>
    </Layout>
  );
}
