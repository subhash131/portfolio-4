"use client";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AnimatedWebsite = () => {
  const { x, y } = useMousePosition();
  return (
    <div className="w-full h-screen bg--200">
      <div className="w-full h-full items-center relative flex justify-center">
        <motion.img
          src="/assets/animated_website/website_background.png"
          alt=""
          width={100}
          height={100}
          className="w-[60%] h-[90%] "
        />
        <motion.img
          src="/assets/animated_website/web_component1.png"
          alt=""
          width={100}
          height={100}
          className="w-[23%] h-[35%] absolute left-[22%] top-[57%] z-10"
        />
        <motion.img
          src="/assets/animated_website/web_component2.png"
          alt=""
          width={100}
          height={100}
          className="w-[16%] h-[35%] absolute left-[46.5%] top-[57%] z-10"
        />
        <motion.img
          src="/assets/animated_website/web_component3.png"
          alt=""
          width={100}
          height={100}
          className="w-[15%] h-[57%] absolute left-[64%] top-[35%] z-10"
        />
        <motion.img
          src="/assets/animated_website/card.png"
          alt=""
          width={100}
          height={100}
          className="w-[20%] -rotate-[110deg] kew-y-12 h-[25%] absolute left-[62%] top-[33%] z-10"
        />
      </div>
    </div>
  );
};

export default AnimatedWebsite;
