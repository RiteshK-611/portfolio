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
  );
};

export default Project;
