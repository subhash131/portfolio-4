import React from "react";
import TextAnimate from "../designs/TextAnimate";

const Hero = () => {
  return (
    <div className=" absolute w-full h-[calc(100vh-8rem)] bg-red-5 justify-center items-center flex bg-re-50">
      <div className="bg-gree-300 w-[80%] ">
        <p className="text-white text-7xl uppercase font-bold leading-tight">
          Crafting digital <TextAnimate>solutions</TextAnimate> through{" "}
          <TextAnimate>code</TextAnimate>, a software
          <TextAnimate>engineer</TextAnimate> transforms complexity into
          seamless <TextAnimate>functionality</TextAnimate>
        </p>
      </div>
    </div>
  );
};

export default Hero;
