"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls: string[][];
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div
          key={index}
          className="span-tooltip bg-black rounded-full ring-1 ring-inset ring-ring hover:-translate-x-[0.7rem] ease-linear duration-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <Image
            key={index}
            className="p-3"
            src={`/assets/svgs${url[0]}`}
            width={45}
            height={45}
            alt={url[1]}
          />
          <span>{url[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default AvatarCircles;
