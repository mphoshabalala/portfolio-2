import React from "react";
import nextLevol from "../images/nextlevol.png";
import code from "../images/coding.png";
import liveDemo from "../images/redirect.png";

export default function NextLevol() {
  return (
    <li
      className="flex-col h-full  bg-white w-full flex p-2 m-0 my-16 rounded md:flex-row"
      id="next-levol-project"
    >
      <a
        className="w-full md:w-1/2 h-projectHeight overflow-hidden relative"
        href="https://eloquent-paprenjak-c6768f.netlify.app/"
        target="blank"
      >
        <img
          className="  md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={nextLevol}
          alt=""
        />
      </a>
      <div className=" w-full md:w-1/2 md:pl-4 font-bold text-center  md:text-start md:items-start">
        <h3 className="font-bold md:text-2xl  my-4 font-montserrat">
          NextLevol (October 2023)
        </h3>
        <h4 className="font-bold  text-darkGrey my-4">Category - Front-end</h4>{" "}
        <p className="text-straight">
          NextLevol is an e-commerce frontend website designed for selling a
          wide range of accessories, including clothing, jewelry, and electronic
          devices. It provides a user interface for selecting products and
          validating account creation, utilizing the free online
          fakestoreapi.com API.
        </p>
        <ul className="flex flex-wrap p-0">
          <li className="shadow-secondary p-2 font-bold">REACT</li>
          <li className="shadow-secondary p-2 font-bold">VANILLA CSS</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/e-commerce-next-levol-app"
              target="blank"
            >
              CODE <img className="h-5 ml-4" src={code} alt="" />
            </a>
          </li>
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://eloquent-paprenjak-c6768f.netlify.app/"
              target="blank"
            >
              LIVE DEMO <img className="h-5 ml-4" src={liveDemo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}
