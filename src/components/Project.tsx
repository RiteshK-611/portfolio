"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";
import { Icons } from "@/lib/Icons";

const usedArray = [
  "React",
  "Javascript",
  "Node",
  "MongoDB",
  "MaterialUI",
  "Figma",
  "WebAR",
];

import React from 'react';
import { motion } from 'framer-motion';

const ImageComponent = () => {
  return (
    <div className="col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-primary/10 bg-transparent">
      <div className="rounded-lg p-4 overflow-hidden bg-[#13162D] bg-[url('/bg.png')] bg-cover">
        <motion.img
          animate={{ rotate: -6, y: 4 }}
          transition={{ ease: "easeOut", duration: 2 }}
          src="/inar.jpg"
          alt="inar"
          className="rounded-lg transform transition-transform ease-in duration-200"
          width={420}
          height={420}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImageComponent;


import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ImageComponent = () => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-primary/10 bg-transparent">
      <div className="rounded-lg p-4 overflow-hidden bg-[#13162D] bg-[url('/bg.png')] bg-cover">
        <motion.img
          style={{ rotate }}
          src="/inar.jpg"
          alt="inar"
          className="rounded-lg transform transition-transform ease-in duration-200"
          width={420}
          height={420}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImageComponent;



// import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ImageComponent = () => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, -6]);
  const translateY = useTransform(scrollYProgress, [0, 1], [4, 4]);

  return (
    <div className="col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-primary/10 bg-transparent">
      <div className="rounded-lg p-4 overflow-hidden bg-[#13162D] bg-[url('/bg.png')] bg-cover">
        <motion.img
          style={{ rotate, translateY }}
          src="/inar.jpg"
          alt="inar"
          className="rounded-lg transform transition-transform ease-in duration-200"
          width={420}
          height={420}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// export default ImageComponent;


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
            <div className="col-span-2 relative flex items-center justify-center w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-primary/10 bg-transparent">
              <div className="rounded-lg p-4 overflow-hidden bg-[#13162D] bg-[url('/bg.png')] bg-cover">
                <Image
                  src="/inar.jpg"
                  alt="inar"
                  className="rounded-lg transform transition-transform ease-in duration-200 hover:rotate-6 hover:translate-y-4"
                  width={420}
                  height={420}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-span-3 w-full h-auto m-auto rounded-xl p-4 ring-1 ring-inset ring-primary/10 bg-transparent">
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
                <div className="pt-3">
                  <p className="text-sm font-mono">Tech Stack</p>
                  <Dock className="left-0">
                    <DockIcon>
                      <Icons.gitHub className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                      <Icons.googleDrive className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                      <Icons.notion className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                      <Icons.openai className="h-6 w-6" />
                    </DockIcon>
                    <DockIcon>
                      <Icons.whatsapp className="h-6 w-6" />
                    </DockIcon>
                  </Dock>
                </div>
                <Link href="#">
                  <button className="px-5 py-2 mt-4 mr-8">Demo</button>
                </Link>
                <Link href="#">
                  <button className="px-5 py-2 mt-4">Code</button>
                </Link>
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
