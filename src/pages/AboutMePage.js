import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

export default function AboutMePage() {
  return (
    <>
      <ScrollToTop />
      <header className="bg-blue-900 z-10 md:font-bold w-full fixed top-0 left-0 h-16 md:h-24 flex items-center justify-center border-t-blue-300 border-t-8 text-blue-400">
        <div className="flex px-8 items-center justify-between w-full md:px-32 ">
          <ul className="flex">
            <li className="    cursor-pointer hover:text-white transition-all ">
              <Link to="/">Home</Link>
            </li>
            <li className=" cursor-pointer hover:text-white transition-all ">
              <p>/</p>
            </li>
            <li className=" cursor-pointer text-white transition-all ">
              <Link to="/about-me">About-Me</Link>
            </li>
          </ul>
          <Link
            className="p-4 cursor-pointer hover:text-white transition-all"
            to="/"
          >
            Mpho.Dev
          </Link>
        </div>
      </header>
      <div className=" p-8 pt-24  md:p-32 bg-blue-100 ">
        <div className="bg-darkBlue text-blue-200 p-4 md:p-8 text-center md:text-start">
          <h1 className="font-bold font-montserrat text-3xl">About Me</h1>
          <p>
            Hello, I hope you are doing well. My name is Mpho Shabalala, and I
            am a junior full-stack web developer. I embarked on my programming
            journey in 2020, and over the years, I have acquired a solid
            foundation in programming. Eventually, I found my niche as a MERN
            full-stack JavaScript developer. <br /> <br /> While I identify as a
            web developer, I also consider myself a problem solver. My
            background knowledge spans various fields, and I am comfortable
            collaborating with individuals who are not developers. My desire is
            to effectively solve the problems people encounter by extracting
            business rules and designing solutions. I have worked, and continue
            to work, with colleagues (my peers) from diverse backgrounds,
            including Accounting and Engineering. <br />
            <br /> I hold a special affection for psychology and philosophy. I
            firmly believe that through a thorough analysis of every situation
            or problem, there can be a software solution to many of our daily
            challenges. This belief motivates me to improve as a developer every
            day.
          </p>

          <h1 className="font-bold font-montserrat text-3xl mt-8">Education</h1>
          <p>
            I was born and raised in a village in the Mpumalanga province of
            South Africa, where I completed my primary and secondary education
            (Grade 1 to 12). In 2020, I relocated to Johannesburg to pursue a
            degree in Computer Sciences at the University of Johannesburg, where
            my programming journey commenced. During my time at the university,
            I grasped the fundamentals of programming, including the Object
            Orientation paradigm and design principles in C++. I also gained
            some knowledge in Java application development and MySQL database
            design. <br />
            <br /> While at the university, I dedicated a substantial portion of
            my time to studying web development and concluded that it is the
            best career choice for me. This decision was influenced by my
            realization that I couldn't complete my formal education due to
            financial constraints.
            <br />
            <br />
            I made the choice to utilize free and cost-effective online
            resources (Udemy courses) to refine my web development skills. Over
            time, I've reached a milestone of becoming a proficient problem
            solver and analytical thinker. With that being said, I am thrilled
            to present my skills to the world and continue learning from it.
            <br />
            Thank you!😊
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
