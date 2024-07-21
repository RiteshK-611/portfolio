"use client";

import React, { useEffect, useState } from "react";
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 max-w-7xl w-full mx-auto p-4 rounded-md my-12 grid-flow-dense overflow-hidden">
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-[200px] md:min-h-36 grid-flow-dense col-span-1 md:col-span-3 row-span-2 order-2 md:order-1">
            <div className="relative h-full w-full min-w-full overflow-hidden rounded-lg border bg-background flex  md:shadow-xl">
              <span className="z-10 pointer-events-none whitespace-pre-wrap text-center text-xl md:text-3xl px-5 pt-[4%] font-semibold leading-none">
                I&apos;m very flexible with timezone communications
              </span>
              <Globe className="top-16" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-[200px] md:min-h-36 grid-flow-dense col-span-1 md:col-span-2 row-span-1 md:row-span-2 p-5 order-1 md:order-2">
            <div className="w-full h-auto m-auto p-4 md:hidden hover:scale-95 ease-in duration-300">
              <img src="/profile.png" alt="/" />
            </div>
            <Canva />
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-36 grid-flow-dense col-span-1 md:col-span-2 row-span-1 md:row-span-2 flex flex-col items-center justify-center order-4 md:order-3">
            <span className="z-10 pointer-events-none whitespace-pre-wrap md:text-xs lg:text-base text-sm text-[#2E2F42] dark:text-[#C1C2D3] leading-none px-10 pt-6">
              I constantly try to improve
            </span>
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-xl md:text-3xl font-semibold leading-none px-10">
              My Skills
            </span>
            <div className="w-full">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-[200px] md:min-h-36 grid-flow-dense col-span-1 md:col-span-2 row-span-1 flex overflow-hidden order-3 md:order-4">
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-xl md:text-3xl font-semibold leading-none px-10 pt-[10%]">
              Tech enthusiast with a passion for development.
            </span>
            <DotPattern
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] left-[2%] top-[4%]"
              )}
            />
            <div className="absolute right-0 -bottom-5">
              {theme === "dark" ? (
                <Image
                  src={"/assets/svgs/bgd.svg"}
                  width={200}
                  height={200}
                  priority={true}
                  alt="Dark theme background"
                />
              ) : (
                <Image
                  src={"/assets/svgs/bgl.svg"}
                  width={200}
                  height={200}
                  priority={true}
                  alt="Light theme background"
                />
              )}
            </div>
          </div>
          <div className="rounded-xl ring-1 ring-inset ring-ring relative min-h-[200px] md:min-h-36 grid-flow-dense col-span-1 md:col-span-2 md:col-start-4 row-span-1 flex flex-col items-center justify-evenly order-5">
            <Ripple />
            <span className="z-10 pointer-events-none whitespace-pre-wrap text-center text-xl md:text-3xl font-semibold leading-none px-10">
              Do you want to start a project together?
            </span>
            <button className="relative inline-flex h-12 md:h-14 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-background px-8 py-2 text-lg font-medium text-foreground backdrop-blur-3xl">
                Let&apos;s Connect
              </span>
            </button>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+10rem)]"
          aria-hidden="true">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translate(-72%, -62%) scale(0.5)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translate(-50%, -40%) scale(1)",
              transition: { duration: 2, delay: 0.75 },
            }}
            viewport={{ once: true }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1f1e55] to-[#5651e5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}></motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
