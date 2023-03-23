import React from "react";
import Logo from "@assets/logo.svg";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "src/store/user";
import socketIO from "socket.io-client";
export default function Navbar() {
  const username = userStore((state: any) => state.username);
  const deleteUsername = userStore((state: any) => state.deleteUsername);
  const socket = socketIO("http://localhost:82");
  const navigate = useNavigate();
  const handleDisconnect = () => {
    socket.emit("disconnect_user", username);
    deleteUsername();
    navigate("/");
  };

  /* Perform the disconnect when user closes the app */
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "";
    const socket = socketIO("http://localhost:82");
    socket.emit("disconnect_user", username);
    deleteUsername();
  });

  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-1 px-2 md:px-20 lg:px-20 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={Logo} className="logo" alt="app logo"></img>
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {username != "" ? (
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-white border-white hover:border-transparent hover:text-white hover:bg-green-1 mt-4 lg:mt-0 duration-300 hover:shadow-lg uppercase hover:shadow-green-1/50 hover:border-green-2 w-full md:w-auto lg:w-auto"
              onClick={() => handleDisconnect()}
            >
              Disconnect
            </button>
          ) : (
            <Link
              to={username == "" ? "/username" : "/chat"}
              className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-white border-white hover:border-transparent hover:text-white hover:bg-green-1 mt-4 lg:mt-0 duration-300 hover:shadow-lg uppercase hover:shadow-green-1/50 hover:border-green-2 w-full md:w-auto lg:w-auto"
            >
              Start chat
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
