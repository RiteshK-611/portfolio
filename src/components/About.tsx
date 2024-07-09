"use client";

import React from "react";
// import { MdOutlinePlayArrow } from "react-icons/md";
import Link from "next/link";
import Canva from "./ThreeD";
import Image from "next/image";
import pic from "../../public/profile.png";
import { motion } from "framer-motion";
import IconCloud from "./ui/icon-cloud";
import Globe from "./ui/globe";

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

        <div className="grid grid-cols-5 gap-8 max-w-7xl w-full mx-auto p-4 rounded-md my-12 grid-flow-dense overflow-hidden">
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-3 row-span-2">
            <div className="relative h-full w-full min-w-[32rem] overflow-hidden rounded-lg border bg-background flex items-center pt-8 md:pb-60 md:shadow-xl">
              <span className="z-10 pointer-events-none whitespace-pre-wrap text-center text-4xl font-semibold leading-none">
                I&apos;m very flexible with timezone communications
              </span>
              <Globe className="top-16" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-2 row-span-2">
            <Canva />
          </div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-2 row-span-2">
            <IconCloud iconSlugs={slugs} />
          </div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-2 row-span-1"></div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 row-span-1"></div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-1 row-span-1"></div>
          <div className="rounded-md border relative min-h-36 grid-flow-dense col-span-2 row-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
