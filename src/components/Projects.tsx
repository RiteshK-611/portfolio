import Link from "next/link";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="md:grid grid-cols-5 gap-4 mx-20 p-5 group">
      <PinContainer
        containerClassName="col-span-2 relative flex items-center justify-center w-full h-auto m-auto"
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji">
        <div className="relative flex basis-full p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[20rem]">
          <div
            className="relative overflow-hidden lg:rounded-xl flex justify-center bg-[#13162D]">
            <Image
              src="/inar.jpg"
              alt="cover"
              className="absolute top-8 transform rotate-6 rounded-lg"
              width={420}
              height={420}
            />
            <Image src="/bg.png" alt="bgimg" width={500} height={500} />
          </div>
        </div>
      </PinContainer>
      <div className="col-span-3 m-auto pt-5 md:pt-0 p-1 ">
        <p className="pb-4 text-xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
          Project
        </p>
        <p>My project description</p>
        <div className="pt-3">
          <p className="text-sm font-semibold pb-1">Technologies used:</p>
          {/* {usedArray.map((used, i) => {
            return (
              <span key={i} className="rounded-[3px] text-xs font-bold text-[#0967d2] border border-[#0967d2] border-sky-500 m-[3px] first-of-type:ml-0 py-1 px-3 hover:bg-blue-500 hover:text-white inline-block ease-in duration-300">
                {used}
              </span>
            );
          })} */}
        </div>
        <Link href="#">
          <button className="px-5 py-2 mt-4 mr-8">Demo</button>
        </Link>
        <Link href="#">
          <button className="px-5 py-2 mt-4">Code</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
