"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AvatarCirclesProps {
  className?: string;
  avatarUrls: string[];
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <div key={index} className="bg-black rounded-full ring-1 ring-inset ring-ring">
          <Image
            key={index}
            className="p-3"
            src={url}
            width={45}
            height={45}
            alt={`Avatar ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarCircles;
