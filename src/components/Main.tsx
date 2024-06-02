import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";

const Main = () => {
  const socialBtn =
    "dark:shadow-lg dark:shadow-black dark:hover:shadow-none rounded-full shadow-xl text-[#5651e5] p-6 text-lg cursor-pointer hover:shadow-none ease-in duration-300";

  return (
    <main
      id="home"
      className="w-full h-screen text-center flex min-h-screen items-center justify-between p-24 ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#5651e5" />
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            Let&apos;s Build Something Together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-600">
            Hi, I&apos;m <span className="text-[#5651e5]">Ritesh.</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-600">
            A Full-Stack Software Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            I&apos;m a Full-Stack Software Developer 🚀 having an experience of
            building Web and Mobile applications with Javascript / React / Node
            and some other cool libraries and frameworks. I love building
            beautiful interfaces, apps, and everything in between!
            {/* I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies. */}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
