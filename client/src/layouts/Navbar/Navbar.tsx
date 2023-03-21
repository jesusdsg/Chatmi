import React from "react";
import Logo from "@assets/logo.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark-1 px-20 py-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={Logo} className="logo" alt="app logo"></img>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a> */}
        </div>
        <div>
          <Link
            to="/chat"
            className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-white border-white hover:border-transparent hover:text-white hover:bg-green-1 mt-4 lg:mt-0 duration-300 hover:shadow-lg uppercase hover:shadow-green-1/50 hover:border-green-2"
          >
            Start chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
