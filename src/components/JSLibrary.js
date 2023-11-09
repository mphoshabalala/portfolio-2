import React from "react";
import library from "../images/library.png";
import code from "../images/coding.png";

export default function JSLibrary() {
  return (
    <li
      className="flex-col h-full  bg-white w-full flex p-2 m-0 my-16 rounded md:flex-row"
      id="next-levol-project"
    >
      <a
        className="w-full md:w-1/2 h-projectHeight  overflow-hidden relative"
        href="https://github.com/mphoshabalala/DR-ELECRO"
        target="blank"
      >
        <img
          className=" md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={library}
          alt=""
        />
      </a>
      <div className="md:text-start text-center text-greyBorder w-full md:w-1/2 md:pl-4 font-bold">
        <h3 className="font-bold text-2xl text-darkGrey my-4 font-montserrat">
          Component Based Library (July 2023)
        </h3>
        <h4 className="font-bold text-1xl text-darkGrey my-4">
          Category - Front-End(Library)
        </h4>
        <p>
          The Vanilla JS COMPONENT BASED utility library is a well-designed and
          thoroughly documented library that offers a variety of web application
          components. It is designed to address the issues of code reusability
          and readability. The library is documented using JavaScript
          documentation techniques that are widely recognized in many different
          integrated development environments (IDEs).
        </p>
        <ul className="flex flex-wrap p-0">
          <li className="shadow-secondary p-2 font-bold">Vanilla JS</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/utilities"
              target="blank"
            >
              CODE <img className="h-5 ml-4" src={code} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}
