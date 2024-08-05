import React from "react";
import GlassContainer from "./GlassContainer";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen text-center flex items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col lg:flex-row justify-around items-center gap-8 md:gap-4">
        <div className="text-left font-mono">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s connect
          </span>
          <br />
          <span className="pl-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            & build something together!
          </span>
        </div>
        <div className="mt-8 md:mt-0">
          <GlassContainer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
