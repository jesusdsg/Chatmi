import Layout from "@layouts/Layout";
import React, { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import ChatFooter from "./ChatFooter";

export default function Chat({ socket }: any) {
  const [messages, setMessages] = useState<any>([]);
  const [activeRoom, setActiveRoom] = useState<any>(null);

  const receiveMessage = (message: any) => {
    console.log("message is ", message);
  };

  useEffect(() => {
    console.log("Sockeeet", socket);
    //console.log("Aqui", activeRoom);
    socket.on("new_message", (data: any) => {
      console.log("Meessage", data);
      setMessages([]);
      setMessages([...messages, data]);
    });
    if (!!activeRoom) {
      /*  const res = socket.on("event_join", activeRoom.name);
      console.log("eee", res);
      socket.on("new_message", (data: any) => {
        console.log(data);
      }); */
    }
    //socket.on("new_message", receiveMessage);

    return () => {
      socket.off("new_message", receiveMessage);
    };
  }, [socket, activeRoom, messages]);

  return (
    <Layout>
      <div className="grid md:flex lg:flex h-96">
        <div className="w-full md:w-3/5 lg:w-2/5">
          <ChatList
            socket={socket}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
        <div className="w-full md:w-3/5 lg:w-3/5">
          <ChatBody messages={messages} />
          <ChatFooter
            socket={socket}
            messages={messages}
            setMessages={setMessages}
            room={activeRoom}
          />
        </div>
      </div>
    </Layout>
  );
}
