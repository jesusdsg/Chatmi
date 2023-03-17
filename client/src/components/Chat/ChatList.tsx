import React from "react";
import {
  FcPodiumWithSpeaker,
  FcSportsMode,
  FcVoicePresentation,
} from "react-icons/fc";

const rooms = [
  {
    title: "Sports",
    name: "sports",
    description: "We can talk about the last sport news and trends...",
    icon: <FcSportsMode size="2rem" />,
  },
  {
    title: "Religion",
    name: "religion",
    description: "We can talk about the last sport news and trends...",
    icon: <FcPodiumWithSpeaker size="2rem" />,
  },
  {
    title: "Politics",
    name: "politics",
    description: "We can talk about the last sport news and trends...",
    icon: <FcVoicePresentation size="2rem" />,
  },
];

interface RoomType {
  title: string;
  name: string;
  description: string;
  icon: any;
}

export default function ChatList() {
  return (
    <div className="bg-green-2 rounded-l-sm h-full border border-dark-3 py-4 w-full">
      <div className="px-8 py-4">
        <h3 className="text-xl font-bold">Room List</h3>
      </div>

      <ul>
        {rooms.map((room: RoomType) => {
          return (
            <li key={room.name} className="cursor-pointer">
              <div className="flex flex-wrap px-8 py-4 bg-green-2 text-light hover:bg-green-1 duration-300">
                <div className="flex gap-2 items-center w-full">
                  {room.icon} <h3 className="text-xl w-full">{room.title}</h3>
                </div>

                <p className="text-sm text-light-1/80">{room.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
