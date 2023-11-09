import React from "react";
import liveDemo from "../images/redirect.png";
import shoppingList from "../images/list.png";
import code from "../images/coding.png";

export default function ShoppingList() {
  return (
    <li
      className="flex-col-reverse h-full  bg-white w-full flex p-2 m-0 my-16 rounded md:flex-row"
      id="shoppingList"
    >
      <div className=" w-full md:w-1/2 md:pr-4 font-bold text-center items-center  md:text-start md:items-start">
        <h3 className="font-bold text-2xl text-darkGrey my-4 font-montserrat">
          Shopping List (July 2023)
        </h3>
        <h4 className="font-bold my-4">Category - Front-End</h4>
        <p>
          This shopping list serves as a demonstration of my understanding of
          basic ReactJS. It is designed to be a helpful tool during shopping.
          The application provides functionality for adding a list of items you
          want to purchase. Simultaneously, it calculates the total price as you
          add or remove items from the list. Additionally, you can set a budget
          and determine whether you can still add items to the list within your
          budget.
        </p>
        <ul className="flex flex-wrap w-full items-center md:items-start p-0">
          <li className="shadow-secondary p-2 font-bold">REACT</li>
          <li className="shadow-secondary p-2 font-bold">CSS</li>
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
        className="w-full md:w-1/2 h-projectHeight  overflow-hidden relative"
        href="#12"
        target="blank"
      >
        <img
          className="md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={shoppingList}
          alt=""
        />
      </a>
    </li>
  );
}
