import React from "react";
import { Project } from "./project";
import client from "@/tina/__generated__/client";

export const Projects = async () => {
  const { data } = await client.queries.projectConnection({});
  return (
    <div
      className="mt-24 container grid grid-cols-1 md:grid-cols-2 gap-8"
      id="projects"
    >
      {data.projectConnection.edges?.map((project) =>
        project?.node ? (
          <Project
            key={project.cursor}
            image={project.node.heroImage}
            title={project.node.title}
            description={project.node.excerpt}
            slug={project.node._sys.filename}
          />
        ) : null
      )}
    </div>
  );
};
