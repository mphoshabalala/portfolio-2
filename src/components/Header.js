import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 z-10 font-bold w-full fixed top-0 left-0 h-24 flex items-center justify-center border-t-blue-300 border-t-8 text-blue-400">
      <div className="flex items-center justify-between w-full px-32 ">
        <ul className="flex">
          <li className="p-4 cursor-pointer hover:text-white transition-all ">
            <a href="/#about">About Me</a>
          </li>
          <li className="p-4 cursor-pointer  hover:text-white transition-all  ">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-4 cursor-pointer  hover:text-white transition-all ">
            <a href="#contacts">Contacts Info</a>
          </li>
        </ul>
        <a
          className="p-4 cursor-pointer  hover:text-white transition-all"
          href="/"
        >
          Mpho.Dev
        </a>
      </div>
    </header>
  );
}
