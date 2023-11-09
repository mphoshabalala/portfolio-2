import React from "react";

export default function Footer() {
  return (
    <footer
      className="flex p-2 md:p-8 md:px-32 md:py-24  bg-black"
      id="contacts"
    >
      <div className="  mt-0 text-white font-montserrat flex flex-col md:flex-row  w-full pt-8 border-b-4 md:pb-8">
        <div className="  mt-0 text-white font-montserrat md:w-2/3">
          <p className="text-2xl md:text-3xl font-lato">
            Hey! thank you for taking your precious time to go through my
            portfolio, If you are impressed by my skills and want me to be part
            of your group or handle your next big project, don't hesitate to
            reach out to me.😊{" "}
          </p>
          <h1 className="text-4xl  text-underline py-8">Contact Me</h1>
          <div className="flex flex-col">
            <a className="" href="mailto:mphoshabalala3401@gmail.com">
              mphoshabalala3401@gmail.com
            </a>
            <a href="mailto:mphoshabalala3613@gmail.com">
              mphoshabalala3613@gmail.com
            </a>
            <p>(+27) 71 257 6112</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 pt-8 md:pt-0 md:pl-16">
          <p>
            See my freelancing profile here:{" "}
            <span>
              <a href="#1">Latium</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
