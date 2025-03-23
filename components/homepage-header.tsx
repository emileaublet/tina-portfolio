"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { tinaField, useTina } from "tinacms/dist/react";
import { HomepageQuery } from "@/tina/__generated__/types";
import { TinaMd } from "./tina-wrapper";

interface HomepageHeaderProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: HomepageQuery;
}

export const HomepageHeader = (props: HomepageHeaderProps) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <header className="md:grid md:grid-cols-8 gap-12 mt-16">
      <Image
        src={data.homepage.heroImage}
        data-tina-field={tinaField(data.homepage, "heroImage")}
        alt="Jeffrey Julio-Vietz"
        width={400}
        height={400}
        priority
        className="mx-auto col-span-3 w-full md:ml-auto md:mr-0 rounded-full"
      />

      <div className="col-span-4 xl:col-span-4">
        <Balancer
          as="h1"
          data-tina-field={tinaField(data.homepage, "title")}
          className="text-primary-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[98%] block"
        >
          {data.homepage.title}
        </Balancer>
        <Balancer
          as="p"
          data-tina-field={tinaField(data.homepage, "lead")}
          className="text-2xl md:text-2xl xl:text-3xl font-normal mt-2 md:mt-4 xl:mt-6"
        >
          {data.homepage.lead}
        </Balancer>
        <Balancer
          as="div"
          data-tina-field={tinaField(data.homepage, "body")}
          className="my-8 text-xl text-neutral-600 dark:text-neutral-400"
        >
          <TinaMd content={data.homepage.body} />
        </Balancer>
      </div>
    </header>
  );
};
