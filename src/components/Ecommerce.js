import React from "react";
import code from "../images/coding.png";
import liveDemo from "../images/redirect.png";
import ecommerce from "../images/eCommerce.png";

export default function Ecommerce() {
  return (
    <li
      className="flex-col h-max md:h-projectHeight bg-white w-full flex p-4 m-0 mt-40 rounded md:flex-row"
      id="next-levol-project"
    >
      <div className="text-greyBorder w-full md:w-1/2 pr-4 font-bold">
        <h3 className="font-bold text-2xl text-darkGrey my-4 font-montserrat">
          E-Commerce API (September 2023)
        </h3>
        <h4 className="font-bold text-1xl text-darkGrey my-4">
          Category - Back-end
        </h4>{" "}
        <p>
          This e-commerce API is a demonstration of my backend skills. It
          follows a RESTful architecture and adheres to the MVC design pattern.
          It is designed to perform various CRUD (Create, Read, Update, Delete)
          operations with integration of MongoDB (using Mongoose). The API
          consists of two parts, identified as Authentication and Main
          Application, which are connected together using a middleware approach.
          For a comprehensive understanding of this API, please visit the README
          to access the documentation.
        </p>
        <ul className="flex p-0">
          <li className="shadow-secondary p-2 font-bold">NodeJS</li>
          <li className="shadow-secondary p-2 font-bold">ExpressJS</li>
          <li className="shadow-secondary p-2 font-bold">MongoDB</li>
          <li className="shadow-secondary p-2 font-bold">Mongoose</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/e-commerce-store-API"
              target="blank"
            >
              CODE <img className="h-5 ml-4" src={code} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <a
        className="w-full md:w-1/2 h-projectHeight md:h-full overflow-hidden relative"
        href="https://github.com/mphoshabalala/e-commerce-store-API"
        target="blank"
      >
        <img
          className=" hidden md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={ecommerce}
          alt=""
        />
      </a>
    </li>
  );
}
