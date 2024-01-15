"use client";
import React, { useLayoutEffect, useState } from "react";
import styles from "./hero.module.css";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

const StyledText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-[var(--text)] inline-block">{children}</span>;
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  let size = isHovered ? 400 : 40;

  return (
    <div className=" w-full h-[calc(100vh-8rem)] bg-red-5 justify-center items-center flex bg-re-50 cursor-none">
      <div className="bg-gree-300 w-full h-full flex items-center justify-center">
        <div className="w-[50%] h-[60%]">
          <p className="text-white text-5xl uppercase font-bold leading-tight">
            a <StyledText>software engineer</StyledText>
            transforms complexity into seamless{" "}
            <StyledText>functionality,</StyledText>
          </p>
        </div>
      </div>
      <motion.div
        className={`bg-gree-300 w-full h-full flex items-center justify-center absolute mask ${styles.mask}`}
        animate={{
          WebkitMaskPosition: `${x - (size / 2) * 1.2}px ${
            y - (size / 2) * 1.2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        {/* Noncompliant */}
        <div
          className="w-[50%] h-[50%]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-white text-7xl uppercase font-bold leading-tight">
            Crafting digital <StyledText>solutions</StyledText> through{" "}
            <StyledText>code.</StyledText>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
