import React, { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { userStore } from "src/store/user";
import { useNavigate } from "react-router-dom";
export default function Username() {
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState("");
  const setUsername = userStore((state: any) => state.setUsername);
  const hanldeSubmit = () => {
    setUsername(userValue);
    navigate("/chat");
  };
  return (
    <div className="bg-green-1 h-screen flex">
      <div className="m-auto">
        <label htmlFor="userame" className="text-xl text-white">
          Please write your username
        </label>
        <div className="flex gap-4 items-center">
          <input
            name="username"
            className="text-white rounded-md bg-dark-3 px-6 py-2 border border-dark-3 w-full focus:outline-none focus:border-green-1 duration-300 hover:border-green-2 mt-2"
            type="text"
            placeholder="Username..."
            onChange={(e) => setUserValue(e.target.value)}
          ></input>
          <button
            type="submit"
            className="bg-yellow-1 hover:bg-green-2 duration-300 px-2 py-2 mt-2 border-none rounded-md w-auto  hover:shadow-md flex items-center focus:outline-none"
            onClick={() => hanldeSubmit()}
          >
            <HiCheck size="1.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
}
