import React from "react";

const StyledText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-[var(--text)] inline-block">{children}</span>;
};

const Hero = () => {
  return (
    <div className=" absolute w-full h-[calc(100vh-8rem)] bg-red-5 justify-center items-center flex bg-re-50">
      <div className="bg-gree-300 w-[80%] ">
        <p className="text-white text-7xl uppercase font-bold leading-tight">
          Crafting digital <StyledText>solutions</StyledText> through{" "}
          <StyledText>code</StyledText>, a software
          <StyledText>engineer</StyledText> transforms complexity into seamless{" "}
          <StyledText>functionality</StyledText>
        </p>
      </div>
    </div>
  );
};

export default Hero;
