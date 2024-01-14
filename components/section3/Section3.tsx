"use client";
import React from "react";
import styles from "./section3.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Section3 = () => {
  const { scrollY } = useScroll(); //1200 to 1800
  // console.log("scrollY: ", scrollY);
  let transform = useTransform(
    scrollY,
    [600, 1000],
    [
      "perspective(50px) translateX(0px) translateY(0px) scale(1.3) rotate(0deg) rotateX(4deg) rotateY(0deg) translateZ(0px)",
      "perspective(1200px) translateX(0px) translateY(6px) scale(0.8) rotate(0deg) rotateX(0deg) rotateY(372deg) translateZ(0px)",
    ]
  );

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Shaping digital stories with <br /> creative precision
        </h1>
        <p className={styles.title_description}>
          <br /> Every interaction tells a story!
        </p>
      </div>
      <motion.div
        className={styles.image_container}
        style={{
          transform,
        }}
      >
        <div className={styles.glow}></div>
        <Image
          src="/assets/website6.png"
          alt="image"
          width={1000}
          height={1000}
          className={styles.image}
        />
      </motion.div>
    </div>
  );
};

export default Section3;
