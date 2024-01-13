import Logo from "@/app/logo/logo";
import React from "react";
import Glow from "../designs/Glow";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center h-32 backdrop-blur-sm sticky top-0 z-30">
      <Glow className="w-96 shadow-cus-wide-3xl absolute" />
      <Logo />
    </div>
  );
};

export default Navbar;