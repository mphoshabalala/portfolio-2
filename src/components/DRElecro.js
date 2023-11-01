import React from "react";
import drElecro from "../images/drElecro.png";
import code from "../images/coding.png";
import liveDemo from "../images/redirect.png";

export default function DRElecro() {
  return (
    <li
      className="flex-col h-max md:h-projectHeight bg-white w-full flex p-4 m-0 mt-40 rounded md:flex-row"
      id="next-levol-project"
    >
      <a
        className="w-full md:w-1/2 h-projectHeight md:h-full overflow-hidden relative"
        href="https://github.com/mphoshabalala/DR-ELECRO"
        target="blank"
      >
        <img
          className=" hidden md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={drElecro}
          alt=""
        />
      </a>
      <div className="text-greyBorder w-full md:w-1/2 pl-4 font-bold">
        <h3 className="font-bold text-2xl text-darkGrey my-4 font-montserrat">
          DR Elecro (August 2023)
        </h3>
        <h4 className="font-bold text-1xl text-darkGrey my-4">
          Category - Back-End(EJS Templating UI)
        </h4>
        <p>
          DR Elecro is an e-commerce backend website that utilizes EJS
          templating and is tailored for selling a wide range of electronic
          devices. It provides a user interface for selecting products and
          validates account creation. The website uses a MySQL database for data
          storage.
        </p>
        <ul className="flex p-0">
          <li className="shadow-secondary p-2 font-bold">NodeJS</li>
          <li className="shadow-secondary p-2 font-bold">ExpressJS</li>
          <li className="shadow-secondary p-2 font-bold">EJS Templating</li>
          <li className="shadow-secondary p-2 font-bold">MySQL</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/DR-ELECRO"
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
