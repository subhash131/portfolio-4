"use client";
import useMousePosition from "@/hooks/useMousePosition";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltedCard";

const AnimatedWebsite = () => {
  const { x, y } = useMousePosition();
  return (
    <div className="w-full h-screen bg--200 relative">
      <div className="w-full h-full  bg--300 flex items-center justify-center">
        <TiltCard />
      </div>
    </div>
  );
};

export default AnimatedWebsite;
