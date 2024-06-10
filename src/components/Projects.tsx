import Link from "next/link";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { Dock, DockIcon } from "./ui/dock";
import { Icons } from "@/lib/Icons";

const Projects = () => {
  return (
    <div className="md:grid grid-cols-5 gap-4 mx-20 p-5 group">
      <PinContainer
        containerClassName="col-span-2 relative flex items-center justify-center w-full h-auto m-auto"
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji">
        <div className="relative flex basis-full p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[20rem]">
          <div className="relative overflow-hidden lg:rounded-xl flex justify-center text-card-foreground shadow bg-primary/5">
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
      <div className="col-span-3 mt-4 pt-5 md:pt-0 rounded-xl p-2 ring-1 ring-inset ring-primary/10 lg:mx-2 lg:-mb-8 md:my-0 lg:rounded-2xl lg:p-5">
        <p className="pb-4 text-3xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
          InAR
        </p>
        <div className="rounded-xl border text-card-foreground shadow bg-primary/5 p-2 lg:p-5 h-[82%]">
          <p>
            In Augmented Reality (InAR). It is an Augmented Reality (AR) based
            Ecommerce application. It uses Web-based AR or WebAR to place
            furniture/product in your environment, to get clear knowledge of
            whether this product fits in our environment before buying it out.
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
  );
};

export default Projects;
