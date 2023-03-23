import {
  FcPodiumWithSpeaker,
  FcSportsMode,
  FcVoicePresentation,
} from "react-icons/fc";
import UserImage from "@assets/user.svg";
import uuid from "react-uuid";

const rooms = [
  {
    title: "King Poppy",
    name: "king poppy",
    description: "We can talk about the last sport news and trends...",
    icon: <FcSportsMode size="2rem" />,
    photo: UserImage,
  },
  {
    title: "Rufus Lae",
    name: "rufus lae",
    description: "We can talk about the last sport news and trends...",
    icon: <FcPodiumWithSpeaker size="2rem" />,
    photo: UserImage,
  },
  {
    title: "Tiny Moon",
    name: "tiny moon",
    description: "We can talk about the last sport news and trends...",
    icon: <FcVoicePresentation size="2rem" />,
    photo: UserImage,
  },
];

interface RoomType {
  title: string;
  name: string;
  description: string;
  icon: any;
  photo: any;
  usersList: any[];
}

export default function ChatList({
  socket,
  activeRoom,
  setActiveRoom,
  messages,
  setMessages,
  usersList,
}: any) {
  return (
    <div className="bg-green-2 rounded-l-md border-1 border-light-4 py-4 w-full h-full overflow-y-auto">
      <div className="px-8 py-4">
        <h3 className="text-xl font-bold primary-font">Users in this chat</h3>
      </div>

      <ul className="overflow-y-scroll md:overflow-auto h-32 lg:h-auto md:h-auto">
        {usersList.map((user: { username: string }) => {
          return (
            <li key={uuid()} className="cursor-pointer">
              <div className="flex flex-wrap px-8 py-2 bg-green-2 text-light hover:bg-green-1 duration-300">
                <div className="flex gap-2 items-center">
                  <img
                    src={UserImage}
                    alt="User photo"
                    className="text-white"
                  />
                  <h3 className="text-base w-full mt-1 font-normal">
                    {user.username}
                  </h3>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
