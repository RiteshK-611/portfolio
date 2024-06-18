"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";
import { Icons } from "@/lib/Icons";
import { motion, useScroll, Variants } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import AvatarCircles from "./ui/avatar-circles";

const item = ["/tail.svg", "/figma.svg", "/next.svg", "/mui.svg"];

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Project = () => {
  return (
    <div id="projects" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid grid-rows-4 gap-8">
          <div className="md:grid grid-cols-5 gap-8 m-auto p-5 group">
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
                    src="/inar.jpg"
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
                InAR
              </p>
              <div className="rounded-xl border text-card-foreground shadow bg-primary/5 p-2 lg:p-5 h-[82%]">
                <p>
                  In Augmented Reality (InAR). It is an Augmented Reality (AR)
                  based Ecommerce application. It uses Web-based AR or WebAR to
                  place furniture/product in your environment, to get clear
                  knowledge of whether this product fits in our environment
                  before buying it out.
                </p>
                <div className="mt-7 flex justify-between items-center">
                  <AvatarCircles avatarUrls={item} />
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-s text-indigo-300">
                      Check Live Site
                    </p>
                    <ArrowTopRightIcon
                      className="ms-1 w-6 h-6"
                      color="#CBACF9"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="md:grid grid-cols-3 gap-8 m-auto p-5 group">
    //   <div className="col-span-1 relative flex items-center justify-center w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-2xl dark:shadow-black bg-gray-800 rounded-xl p-1 group-hover:shadow-none ease-in duration-300">
    //     <img className="rounded-lg" src="/inar.jpg" alt="/" />
    //   </div>
    //   <div className="col-span-2 m-auto pt-5 md:pt-0 p-1 ">
    //     <p className="pb-4 text-xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
    //       InAR
    //     </p>
    //     <p>
    //       In Augmented Reality (InAR). It is an Augmented Reality (AR) based
    //       Ecommerce application. It uses Web-based AR or WebAR to place
    //       furniture/product in your environment, to get clear knowledge of
    //       whether this product fits in our environment before buying it out.
    //     </p>
    //     <div className="pt-3">
    //       <p className="text-sm font-semibold pb-1">Technologies used:</p>
    //       {usedArray.map((used, i) => {
    //         return (
    //           <span
    //             key={i}
    //             className="rounded-[3px] text-xs font-bold text-[#0967d2] border border-[#0967d2] border-sky-500 m-[3px] first-of-type:ml-0 py-1 px-3 hover:bg-blue-500 hover:text-white inline-block ease-in duration-300">
    //             {used}
    //           </span>
    //         );
    //       })}
    //     </div>
    //     <Link href="#">
    //       <button className="px-5 py-2 mt-4 mr-8">Demo</button>
    //     </Link>
    //     <Link href="#">
    //       <button className="px-5 py-2 mt-4">Code</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Project;
