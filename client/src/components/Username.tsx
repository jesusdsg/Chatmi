import { useState } from "react";
import { HiCheck } from "react-icons/hi";
import { userStore } from "src/store/user";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Username({ socket }: any) {
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState("");
  const setUsername = userStore((state: any) => state.setUsername);

  const handleSubmit = async () => {
    setUsername(userValue);
    socket.emit("user_list", userValue);
    await socket.on("user_exists", (username: string) => {
      if (username == userValue) {
        alert("This username already exists");
        navigate("/username");
      }
    });
    navigate("/chat");
  };

  return (
    <div className="bg-green-1 h-screen flex">
      <div className="m-auto">
        <label htmlFor="userame" className="text-xl text-white">
          Please write your username
        </label>
        <div>
          <form className="flex gap-4 items-center">
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
              onClick={() => handleSubmit()}
            >
              <HiCheck size="1.5rem" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
