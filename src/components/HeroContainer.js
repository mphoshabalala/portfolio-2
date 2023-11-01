import React from "react";
import me from "../images/myImg.png";
import github from "../images/git.png";
import linkedin from "../images/linkdin.png";
import Stack from "./Stack";

export default function HeroContainer() {
  return (
    <div className="text-blue-300 w-full h-full flex flex-col justify-center overflow-y-hidden px-60">
      <div className="flex ">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-6xl font-bold font-montserrat">
            Junior Full-stack developer.☺️
          </h1>
          <p className="py-8 font-semibold text-2xl">
            Hi, I'm Mpho Shabalala. A passionate Junior Full-stack Developer
            based in Johannesburg, South Africa. 📍
          </p>
          <div className="flex">
            <img src={linkedin} alt="" />
            <img className="ml-4" src={github} alt="" />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center ml-24">
          <img src={me} alt="" />
        </div>
      </div>
      <Stack />
    </div>
  );
}
