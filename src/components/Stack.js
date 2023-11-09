import React from "react";

import html from "../images/html-5.png";
import css from "../images/CSS.png";
import js from "../images/JAVASCRIPT.png";
import nodejs from "../images/nodejs.png";
import expressjs from "../images/ExpressJS.png";
import reactjs from "../images/reactjs.png";
import mongodb from "../images/mongo.png";
import mysql from "../images/mysql.png";

export default function Stack() {
  return (
    <div className="flex ">
      <div className="flex flex-wrap py-8">
        <img className="h-8 md:h-16 p-2" src={html} alt="" />
        <img className="h-8 md:h-16 p-2" src={css} alt="" />

        <img className="h-8 md:h-16 p-2" src={js} alt="" />
        <img className="h-8 md:h-16 p-2" src={nodejs} alt="" />

        <img className="h-8 md:h-16 p-2 bg-white" src={expressjs} alt="" />
        <img className="h-8 md:h-16 p-2" src={reactjs} alt="" />

        <img className="h-8 md:h-16 p-2 bg-white" src={mongodb} alt="" />
        <img className="h-8 md:h-16 p-2" src={mysql} alt="" />
      </div>
    </div>
  );
}
