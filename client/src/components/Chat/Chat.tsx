import Layout from "@layouts/Layout";
import { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatList from "./ChatList";
import ChatFooter from "./ChatFooter";
import { userStore } from "src/store/user";
import { useNavigate } from "react-router-dom";

export default function Chat({ socket }: any) {
  const [messages, setMessages] = useState<any>([]);
  const [activeRoom, setActiveRoom] = useState<any>(null);
  const [usersList, setUsersList] = useState<any>([]);
  const navigate = useNavigate();
  const username = userStore((state: any) => state.username);

  const receiveMessage = (message: any) => {
    console.log("message is ", message);
  };

  const getUserList = () => {
    socket.on("user_list", (data: any) => {
      setUsersList(data);
    });
  };

  const getMessages = () => {
    socket.on("new_message", (data: any) => {
      setMessages([]);
      setMessages([...messages, data]);
    });
  };

  useEffect(() => {
    getMessages();
    getUserList();

    if (username == "") {
      navigate("/username");
    }

    return () => {
      socket.off("new_message", receiveMessage);
    };
  }, [socket, activeRoom, messages]);

  return (
    <Layout>
      <div className="grid md:flex lg:flex h-96">
        <div className="w-full md:w-1/4 lg:w-1/4">
          <ChatList
            socket={socket}
            activeRoom={activeRoom}
            setActiveRoom={setActiveRoom}
            messages={messages}
            setMessages={setMessages}
            usersList={usersList}
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-3/4">
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
