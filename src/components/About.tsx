"use client";

import React from "react";
// import { MdOutlinePlayArrow } from "react-icons/md";
import Link from "next/link";
import Canva from "./ThreeD";
import Image from "next/image";
import pic from "../../public/profile.png";
import { motion } from "framer-motion";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const About = () => {
  return (
    <div id="about" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          About
        </p>
        <h2 className="py-4 dark:text-white">Who I Am</h2>
        <div className="md:grid grid-cols-5 row-span-auto gap-8">
          <div className="col-start-2 col-span-2 row-span-1 m-1 rounded-lg ring-1 ring-fuchsia-400 h-[30vh]">
            {/* <Globe /> */}
          </div>
          <div className="col-span-2 row-span-2 rounded-xl p-2 ring-1 ring-inset ring-ring lg:rounded-2xl relative lg:p-4 w-full h-full max-w-[32rem]">
            <Canva />
          </div>
          <div className="col-start-1 col-span-2 row-span-1 m-1 rounded-lg ring-1 ring-fuchsia-400 h-[30vh]"></div>

          <div className="col-span-2 row-span-2 relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="col-span-2 row-span-1 m-1 rounded-lg ring-1 ring-fuchsia-400"></div>
          <div className="col-start-4 col-span-2 row-span-1 m-1 rounded-lg ring-1 ring-fuchsia-400"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
