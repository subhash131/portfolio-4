import React from "react";

const TextAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-[var(--text)] hover:animate-pulse inline-block">
      {children}
      <br />
    </span>
  );
};

export default TextAnimate;
