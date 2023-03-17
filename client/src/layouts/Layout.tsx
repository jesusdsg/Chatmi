import React from "react";
import Navbar from "./Navbar/Navbar";

interface ReactProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ReactProps) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-4 px-20">{children}</div>
    </div>
  );
}
