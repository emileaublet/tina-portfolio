import React from "react";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="mt-24 container grid grid-cols-2 gap-8">
      <button className="w-full relative aspect-video rounded-xl overflow-hidden group/project">
        <Image
          className="saturate-0 opacity-40 transition-all group-hover/project:saturate-100 group-hover/project:opacity-100"
          layout="fill"
          objectFit="cover"
          src="/6d8847209899125.Y3JvcCwxMzA5LDEwMjQsNjgsMA.webp"
          alt={"Example project"}
        />
      </button>
      <button className="w-full relative aspect-video rounded-xl overflow-hidden group/project">
        <Image
          className="saturate-0 opacity-40 transition-all group-hover/project:saturate-100 group-hover/project:opacity-100"
          layout="fill"
          objectFit="cover"
          src="/9b40ea209253627.Y3JvcCwyNjU5LDIwODAsMTMxLDA.webp"
          alt={"Example project"}
        />
      </button>
    </div>
  );
};
