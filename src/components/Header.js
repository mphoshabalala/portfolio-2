import React, { useState } from "react";
import menubar from "../images/menubar.png";
import cancel from "../images/cancel.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-blue-900 z-10 font-bold w-screen fixed top-0 left-0 h-16  flex items-center justify-center  border-t-blue-300 border-t-4  text-blue-400 md:border-t-8 md:h-24">
      <div className="flex items-center justify-between w-full px-2 md:px-32 ">
        <div>
          <ul className="hidden md:flex">
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
            className="block md:hidden"
            href="#12"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={menubar} alt="" />
          </a>
        </div>
        <a
          className="p-4 cursor-pointer  hover:text-white transition-all"
          href="/"
        >
          Mpho.Dev
        </a>
      </div>
      {isMenuOpen && (
        <div className="w-screen h-screen md:hidden fixed top-0 left-0 flex flex-col py-4 px-8 border-t-4 border-t-blue-300 bg-darkBlue">
          <img
            className="w-8"
            src={cancel}
            alt=""
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <ul className="h-screen flex flex-col items-center justify-center">
            <li>
              <a href="/#about" onClick={() => setIsMenuOpen(false)}>
                About Me
              </a>
            </li>
            <li className="py-4 cursor-pointer  hover:text-white transition-all  ">
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li className=" cursor-pointer  hover:text-white transition-all ">
              <a href="#contacts" onClick={() => setIsMenuOpen(false)}>
                Contacts Info
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
