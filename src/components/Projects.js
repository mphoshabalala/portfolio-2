import React from "react";

import CarDealership from "./CarDealership";
import NextLevol from "./NextLevol";
import Ecommerce from "./Ecommerce";
import DRElecro from "./DRElecro";
import NetWorth from "./NetWorth";
import JSLibrary from "./JSLibrary";
import ShoppingList from "./ShoppingList";

export default function Projects() {
  return (
    <div
      className="bg-gradient-to-br from-darkBlue to-blue-300 w-full h-full px-2 md:px-32 "
      id="projects"
    >
      <div className="flex flex-col justify-center  py-8 ">
        <h1 className=" text-3xl md:text-5xl  md:mb-24 font-bold text-blue-300 font-montserrat">
          My Projects
        </h1>

        <h2 className="font-semibold md:font-bold md:text-2xl  my-4 text-blue-300 font-montserrat">
          Each project is a unique piece of development.🧩
        </h2>
        <ul className="p-0 text-blue-900">
          <CarDealership />
          <NextLevol />
          <Ecommerce />
          <DRElecro />
          <NetWorth />
          <JSLibrary />
          <ShoppingList />
          <p className="text-blue-300 font-bold">
            Many more projects in my github account...
          </p>
        </ul>
      </div>
    </div>
  );
}
