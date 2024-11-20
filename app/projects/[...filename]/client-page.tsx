"use client";
import { TinaMd } from "@/components/tina-wrapper";
import type { ProjectQuery } from "@/tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: ProjectQuery;
}

export default function Project(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  return (
    <article className="container">
      <header>
        <h1
          data-tina-field={tinaField(data.project, "title")}
          className="text-6xl font-bold mb-8 mt-12"
        >
          {data.project.title}
        </h1>
        <p
          data-tina-field={tinaField(data.project, "excerpt")}
          className="text-2xl text-neutral-600 dark:text-neutral-400"
        >
          {data.project.excerpt}
        </p>
      </header>
      <div className="w-full relative aspect-video">
        <Image
          src={data.project.heroImage}
          data-tina-field={tinaField(data.project, "heroImage")}
          alt={data.project.title}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <main data-tina-field={tinaField(data.project, "body")}>
        <TinaMd content={data.project.body} />
      </main>
    </article>
  );
}
