import React from "react";
import coder from "../images/manCoding.png";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div
      className="min-screen  bg-blue-100 px-2 md:px-32 py-8 md:py-24"
      id="about"
    >
      <h1 className=" text-3xl  md:text-5xl mb-8 md:mb-24 font-semibold md:font-bold text-blue-600 font-montserrat">
        About Me
      </h1>
      <div className="flex flex-col h-full  items-center md:items-start md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img className="border-rounded" src={coder} alt="" />
        </div>
        <div className="text-center mt-8 md:mt-0  w-full md:w-1/2 md:border-l-8 border-l-blue-600 md:ml-8 bg-blue-200 rounded-r-lg pb-16 p-2">
          <h1 className="md:text-2xl md:font-extrabold text-blue-700 font-montserrat">
            A dedicated Full-stack Developer based in Johannesburg, South
            Africa.📍
          </h1>
          <p className="font-semibold text-blue-700  md:text-2xl my-8">
            As a junior web developer, I possess a handful set of skills in
            HTML, CSS, Js, NodeJs with Express,React JS, MongoDB with Mongoose
            and MySql relational database. I excel in designing and developing
            responsive front-end web applications and Building robust and
            scalable back-end APIs. I am also a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications.
          </p>
          <Link
            to="/about-me"
            className="bg-blue-900 text-blue-300 py-4 px-6 rounded font-bold"
          >
            Read More Of My Story. 😎
          </Link>
        </div>
      </div>
    </div>
  );
}
