"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, Variants } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import AvatarCircles from "./ui/avatar-circles";
import { projects } from "@/data";

const items = [
  "/assets/svgs/tail.svg",
  "/assets/svgs/figma.svg",
  "/assets/svgs/next.svg",
  "/assets/svgs/mui.svg",
];

const Project = () => {
  return (
    <div id="projects" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid grid-rows-1 md:grid-rows-4 gap-4 md:gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 m-auto p-5 group">
              <div className="col-span-1 md:col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-ring bg-transparent">
                <div className="rounded-lg p-4 overflow-hidden bg-primary/5 bg-[url('/bg.png')] bg-cover">
                  <motion.div
                    whileInView={{
                      y: 20,
                      rotate: 6,
                      transition: {
                        type: "spring",
                        bounce: 0.8,
                        duration: 0.8,
                      },
                    }}
                    viewport={{ once: true, amount: 1 }}>
                    <Image
                      src={item.img}
                      alt="inar"
                      className="rounded-lg ring-1 ring-ring"
                      width={420}
                      height={420}
                    />
                  </motion.div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-ring bg-transparent">
                <p className="pb-4 text-xl md:text-3xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
                  {item.title}
                </p>
                <div className="rounded-xl border text-card-foreground shadow bg-primary/5 p-2 md:p-4 lg:p-5 h-auto md:h-[82%]">
                  <p className="text-sm md:text-base">{item.description}</p>
                  <div className="mt-7 flex flex-col md:flex-row justify-between items-center">
                    <AvatarCircles avatarUrls={item.iconList} />
                    <Link
                      href={item.link}
                      className="mt-2 md:mt-0 md:text-xl text-indigo-600 dark:text-indigo-300 flex justify-center items-center">
                      Check Live Site
                      <ArrowTopRightIcon className="ms-1 w-4 h-4 md:w-6 md:h-6 text-[#8257c2] dark:text-[#CBACF9]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

{
  /*
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, Variants } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import AvatarCircles from "./ui/avatar-circles";
import { projects } from "@/data";

const items = [
  "/assets/svgs/tail.svg",
  "/assets/svgs/figma.svg",
  "/assets/svgs/next.svg",
  "/assets/svgs/mui.svg",
];

const Project = () => {
  return (
    <div id="projects" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid grid-rows-4 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="md:grid grid-cols-5 gap-8 m-auto p-5 group">
              <div className="col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-ring bg-transparent">
                <div className="rounded-lg p-4 overflow-hidden bg-primary/5 bg-[url('/bg.png')] bg-cover">
                  <motion.div
                    whileInView={{
                      y: 20,
                      rotate: 6,
                      transition: {
                        type: "spring",
                        bounce: 0.8,
                        duration: 0.8,
                      },
                    }}
                    viewport={{ once: true, amount: 1 }}>
                    <Image
                      src={item.img}
                      alt="inar"
                      className="rounded-lg ring-1 ring-ring"
                      width={420}
                      height={420}
                    />
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3 w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-ring bg-transparent">
                <p className="pb-4 text-3xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
                  {item.title}
                </p>
                <div className="rounded-xl border text-card-foreground shadow bg-primary/5 p-2 lg:p-5 h-[82%]">
                  <p>{item.description}</p>
                  <div className="mt-7 flex flex-col md:flex-row justify-between">
                    <AvatarCircles avatarUrls={item.iconList} />
                    <Link
                      href={item.link}
                      className="md:text-xl text-lg px-1 py-2 pt-3 md:px-0 md:py-0 md:pt-0 text-wrap text-indigo-600 dark:text-indigo-300 flex items-center">
                      Check Live Site
                      <ArrowTopRightIcon className="ms-1 w-6 h-6 text-[#8257c2] dark:text-[#CBACF9]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
  
*/
}
