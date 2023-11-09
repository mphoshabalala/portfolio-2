import React from "react";
import liveDemo from "../images/redirect.png";
import networth from "../images/networth.png";
import code from "../images/coding.png";

export default function NetWorth() {
  return (
    <li
      className="flex-col-reverse h-full  bg-white w-full flex p-2 m-0 md:my-16 rounded md:flex-row"
      id="networth"
    >
      <div className=" w-full md:w-1/2 md:pr-4 font-bold text-center items-center  md:text-start md:items-start">
        <h3 className="font-bold text-2xl my-4 font-montserrat">
          NetWorth (August 2023)
        </h3>
        <h4 className="font-bold my-4">Category - Full-Stack</h4>
        <p>
          NetWorth is a web application designed to assist users in managing and
          tracking the value of their assets over time. All calculations adhere
          to the rules and formulas outlined in Property, Plant, and Equipment
          (PP&E). The front-end utilizes a library of utilities that I have
          created and documented thoroughly using VanillaJS. Users can input
          detailed information about their products, including purchase prices
          and purchase years. Through a comprehensive analysis, the application
          calculates the products' depreciation rates and appreciation,
          estimating their current values."
        </p>
        <ul className="flex flex-wrap w-full items-center md:items-start p-0">
          <li className="shadow-secondary p-2 font-bold">Vanilla JS</li>
          <li className="shadow-secondary p-2 font-bold">HTML</li>
          <li className="shadow-secondary p-2 font-bold">Vanilla CSS</li>
          <li className="shadow-secondary p-2 font-bold">NodeJs</li>
          <li className="shadow-secondary p-2 font-bold">ExpressJs</li>
          <li className="shadow-secondary p-2 font-bold">MySql</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/Networth-2.0"
              target="blank"
            >
              CODE <img className="h-5 ml-4" src={code} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <a
        className="w-full md:w-1/2 h-projectHeight overflow-hidden relative"
        href="https://github.com/mphoshabalala/Networth-2.0"
        target="blank"
      >
        <img
          className="  md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={networth}
          alt=""
        />
      </a>
    </li>
  );
}
