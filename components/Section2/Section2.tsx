"use client";
import Image from "next/image";
import React, { useId, useState } from "react";

const data = [
  { img: "/assets/website1.png", name: "Nexus Dashboard" },
  { img: "/assets/website2.png", name: "Womashop Ecommerce" },
  { img: "/assets/website3.png", name: "AutoCare Landing Page" },
  { img: "/assets/website4.png", name: "NFT Landing Page" },
  { img: "/assets/website5.png", name: "ChitChat Connect" },
];

const Section2 = () => {
  const [projectImg, setProjectImg] = useState(data[0].img);
  const id = useId();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[95%] relative  h-[95%] rounded-xl overflow-hidden ">
        <div className="absolute w-[80%] h-full top-10 right-0 z-10">
          <Image
            src={projectImg}
            width={100}
            height={100}
            alt="project image"
            className="w-auto h-[90] object-cover"
          />
        </div>
        <div className="z-20 absolute w-full h-full top-0 left-0  flex flex-col p-10 text-[rgba(255,255,255,0.7)] items- justify-center">
          {data.map(({ img, name }, index) => {
            return (
              <div
                key={`${index}-${id}`}
                onMouseEnter={() => {
                  setProjectImg(img);
                }}
                className="cursor-pointer p-10 hover:text-[var(--text)] text-2xl uppercase font-bold border-y border-white "
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section2;
