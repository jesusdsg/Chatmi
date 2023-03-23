import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "@components/Home";
import Chat from "@components/Chat/Chat";
import socketIO from "socket.io-client";
import Username from "@components/Username";
import { useEffect } from "react";
import { userStore } from "./store/user";

const socket = socketIO("http://localhost:82");

function App() {
  const deleteUsername = userStore((state: any) => state.deleteUsername);
  useEffect(() => {
    /*   const unloadCallback = (e: any) => {
      const username = userStore((state: any) => state.username);
      console.log("Username closing is ", username);
      socket.emit("disconnect_user", username);
      deleteUsername();
      e.preventDefault();
      e.returnValue = "Are you sure, you want to disconnect?";
      return "Are you sure, you want to disconnect?";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      alert('Unmonting')
       window.removeEventListener("beforeunload", unloadCallback); 
    }; */
  }, []);

  const disconnectUser = async () => {
    const username = await userStore((state: any) => state.username);
    console.log("Username is ", username);
    socket.emit("disconnect_user", username);
    deleteUsername();
  };

  window.addEventListener("beforeunload", (event) => {
    disconnectUser();
    console.log("API call before page reload");
  });

  window.addEventListener("unload", (event) => {
    disconnectUser();
    console.log("API call after page reload");
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route
            path="/username"
            element={<Username socket={socket} />}
          ></Route>
          <Route path="/chat" element={<Chat socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
