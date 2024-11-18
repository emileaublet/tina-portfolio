import React from "react";
import { Project } from "./project";

export const Projects = () => {
  return (
    <div
      className="mt-24 container grid grid-cols-1 md:grid-cols-2 gap-8"
      id="projects"
    >
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
      <Project
        image="/5f97b4212040371.Y3JvcCwxMzQ3LDEwNTMsMCww.png"
        title="Example project"
        description="This is a description of the project"
        slug="example-project"
      />
      <Project
        image="/e8f25d208926927.Y3JvcCwyNjcyLDIwODksMCw2.png"
        title="Example project"
        description="This is a description of the project"
        slug="example-project"
      />
    </div>
  );
};
