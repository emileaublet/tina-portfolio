import client from "@/tina/__generated__/client";
import { TinaMd } from "./tina-wrapper";
import { tinaField } from "tinacms/dist/react";

export const Footer = async () => {
  const { data } = await client.queries.global({
    relativePath: "settings.json",
  });

  return (
    <footer className="bg-neutral-900 mt-20 relative ">
      <div className="container py-12">
        <div className=" text-primary-500 font-extrabold text-5xl md:text-7xl flex justify-start gap-16">
          <TinaMd content={data.global.footerText} />
        </div>
      </div>
    </footer>
  );
};
