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
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";
import Ripple from "./ui/ripple";
import { useTheme } from "next-themes";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const About = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  return (
    <div id="about" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          About
        </p>
        <h2 className="py-4 dark:text-white">Who I Am</h2>

        <div className="grid grid-cols-5 gap-8 max-w-7xl w-full mx-auto p-4 rounded-md my-12 grid-flow-dense overflow-hidden">
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-3 row-span-2">
            <div className="relative h-full w-full min-w-[32rem] overflow-hidden rounded-lg border bg-background flex items-center pt-8 md:pb-60 md:shadow-xl">
              <span className="z-10 pointer-events-none whitespace-pre-wrap text-center text-3xl px-5 font-semibold leading-none">
                I&apos;m very flexible with timezone communications
              </span>
              <Globe className="top-16" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-2 row-span-2 p-5">
            <Canva />
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-2 row-span-2 flex flex-col items-center justify-center">
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-3xl font-semibold leading-none px-10 pt-8">
              My Tech Stack
            </span>
            <div className="w-[100%]">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-2 row-span-1 flex items-center overflow-hidden">
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-3xl font-semibold leading-none px-10 mb-5">
              Tech enthusiast with a passion for development.
            </span>
            <DotPattern
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] left-[2%] top-[4%]"
              )}
            />
            <div className="absolute right-0 -bottom-5">
              <Image
                src={`/assets/svgs/${
                  currentTheme === "dark" ? "bgd" : "bgl"
                }.svg`}
                width="200"
                height="200"
                alt=""
              />
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-1 row-span-1">
            <div className="neumorphism-glass w-full h-full">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              {/* <div className="neumorphism-glass w-[90%] h-[90%]">
                <div className="neumorphism-glass w-[87%] h-[87%]"></div>
              </div> */}
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-1 row-span-1">
            <div className="neumorphism-glass w-full h-full">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              {/* <div className="neumorphism-glass w-[90%] h-[90%]">
                <div className="neumorphism-glass w-[87%] h-[87%]"></div>
              </div> */}
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-2 row-span-1 flex flex-col items-center justify-evenly">
            <Ripple />
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-center text-3xl font-semibold leading-none px-10">
              Do you want to start a project together?
            </span>
            <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
                Let&apos;s Connect
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
