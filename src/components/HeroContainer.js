import React from "react";
import me from "../images/myImg.png";
import github from "../images/git.png";
import linkedin from "../images/linkdin.png";
import Stack from "./Stack";

export default function HeroContainer() {
  return (
    <div className="text-blue-300 w-full h-full flex flex-col items-center md:items-start justify-center overflow-y-hidden pt-32 md:pt-0 px-4 md:px-60">
      <div className="flex flex-col-reverse md:flex-row">
        <div className=" w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-start">
          <h1 className=" text-2xl font-semibold md:text-6xl md:font-bold font-montserrat">
            Junior Full-stack developer.
          </h1>
          <p className=" py-4 md:py-8 font-semibold md:text-2xl">
            Hi, I'm Mpho Shabalala. A passionate Junior Full-stack Developer
            based in Johannesburg, South Africa. 📍
          </p>
          <div className="flex">
            <img src={linkedin} alt="" />
            <img className="ml-4" src={github} alt="" />
          </div>
        </div>
        <div className="mb-8  w-full md:mb-0 md:w-1/2 flex flex-col items-center justify-center md:ml-24">
          <img src={me} alt="" />
        </div>
      </div>
      <Stack />
    </div>
  );
}
