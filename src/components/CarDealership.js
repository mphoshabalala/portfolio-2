import React from "react";
import liveDemo from "../images/redirect.png";
import carDealership from "../images/carDealer.png";
import code from "../images/coding.png";

export default function CarDealership() {
  return (
    <li
      className="flex-col-reverse h-max md:h-min bg-white w-full flex p-2 m-0 md:my-16 rounded md:flex-row"
      id="car-dealership"
    >
      <div className=" w-full md:w-1/2 md:pr-4 font-bold text-center items-center  md:text-start md:items-start">
        <h3 className="font-bold md:text-2xl  my-4 font-montserrat">
          Car Dealership App - Best Dealers (October 2023)
        </h3>
        <h4 className="font-bold my-4">Category - Full-Stack</h4>
        <p>
          Car Dealership is a full-stack Single Page Application (SPA) that
          serves the purpose of advertising cars. The application consists of
          dealers who have ideally signed a contract with the salesperson to
          advertise on their behalf. Additionally, the application includes a
          section where users can sell their cars to one of the dealers. The app
          comprises a back-end API and a front-end user interface, which are
          integrated through Cross-Origin Resource Sharing (CORS).
        </p>
        <ul className="flex flex-wrap w-full items-center md:items-start p-0">
          <li className="shadow-secondary p-2 font-bold">REACT</li>
          <li className="shadow-secondary p-2 font-bold">Tailwind CSS</li>
          <li className="shadow-secondary p-2 font-bold">NodeJs</li>
          <li className="shadow-secondary p-2 font-bold">ExpressJs</li>
          <li className="shadow-secondary p-2 font-bold">Mongo DB</li>
        </ul>
        <ul className="items-center md:justify-start flex p-0">
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://github.com/mphoshabalala/car-dealership-full-stack-project"
              target="blank"
            >
              CODE <img className="h-5 ml-4" src={code} alt="" />
            </a>
          </li>
          <li className="p-2 mt-4">
            <a
              className="flex items-center"
              href="https://symphonious-licorice-0dc952.netlify.app/"
              target="blank"
            >
              LIVE DEMO <img className="h-5 ml-4" src={liveDemo} alt="" />
            </a>
          </li>
        </ul>
        <p className="text-red-800">
          Note: the live demo is only a frontend without the api, you can
          navigate to code in github and run it on your localhost for full
          functionality.
        </p>
      </div>
      <a
        className="w-full md:w-1/2 h-projectHeight overflow-hidden relative"
        href="https://symphonious-licorice-0dc952.netlify.app/"
        target="blank"
      >
        <img
          className="  md:block relative transform transform-y-0
               transition-transform duration-5000 w-full  hover:translate-y-[-82%] cursor-pointer"
          src={carDealership}
          alt=""
        />
      </a>
    </li>
  );
}
