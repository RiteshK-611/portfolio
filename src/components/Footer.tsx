import React from "react";
import GlassContainer from "./GlassContainer";

const Footer = () => {
  return (
    <footer className="w-full h-screen text-center flex min-h-screen items-center justify-between md:p-24">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-around items-center">
        <div className="text-left font-mono">
          <span className="text-4xl sm:text-5xl md:text-6xl">
            Let&apos;s connect
          </span>
          <br />
          <span className="pl-1 text-2xl sm:text-3xl md:text-4xl">
            & build something together!
          </span>
        </div>
        <div>
          <GlassContainer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
