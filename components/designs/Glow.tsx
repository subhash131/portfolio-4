import React from "react";

const Glow = ({ className = "w-1  h-1" }: { className?: string }) => {
  return (
    <div
      className={`glow bg-[var(--background)] border-[var(--background)] absolute -z-10 shadow-cus-wide-3xl ${className}`}
    />
  );
};

export default Glow;
