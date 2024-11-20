"use client";
import { Link } from "@/components/link";
import { TinaMd } from "@/components/tina-wrapper";
import type { ProjectQuery } from "@/tina/__generated__/types";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
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
    <article className="container max-w-screen-lg">
      <header className="relative">
        <Link className="text-xl mb-5 mt-24" href="/">
          Back home
        </Link>
        <Balancer
          as="h1"
          data-tina-field={tinaField(data.project, "title")}
          className="text-7xl font-bold mb-8"
        >
          {data.project.title}
        </Balancer>
        <Balancer
          as="p"
          data-tina-field={tinaField(data.project, "excerpt")}
          className="text-2xl text-neutral-300 dark:text-neutral-300 mb-6"
        >
          {data.project.excerpt}
        </Balancer>
      </header>
      <div className="w-[80vw] relative aspect-video rounded-lg overflow-hidden min-w-full -translate-x-1/2 left-1/2 group/img hover:scale-105 duration-500 transition-all hover:duration-1000 my-12">
        <Image
          src={data.project.heroImage}
          data-tina-field={tinaField(data.project, "heroImage")}
          alt={data.project.title}
          className="object-cover group-hover/img:scale-[110%] duration-700 transition-all group-hover/img:duration-2000"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <Balancer
        as="main"
        data-tina-field={tinaField(data.project, "body")}
        className="prose-lg lg:prose-2xl dark:prose-invert prose-h2:font-extrabold"
      >
        <TinaMd content={data.project.body} />
      </Balancer>
    </article>
  );
}
