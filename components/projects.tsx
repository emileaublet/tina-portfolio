import React from "react";
import Image from "next/image";
import { Project } from "./project";

export const Projects = () => {
  return (
    <div className="mt-24 container grid grid-cols-1 md:grid-cols-2 gap-8">
      <Project
        image="/6d8847209899125.Y3JvcCwxMzA5LDEwMjQsNjgsMA.webp"
        title="Example project"
        description="This is a description of the project"
        slug="example-project"
      />
      <Project
        image="/9b40ea209253627.Y3JvcCwyNjU5LDIwODAsMTMxLDA.webp"
        title="Example project"
        description="This is a description of the project"
        slug="example-project"
      />
    </div>
  );
};
