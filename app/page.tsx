import { HomepageHeader } from "@/components/homepage-header";
import { Projects } from "@/components/projects";
import { Resume } from "@/components/resume";
import client from "@/tina/__generated__/client";

export default async function Home() {
  const data = await client.queries.homepage({
    relativePath: "index.mdx",
  });
  return (
    <>
      <main className="container">
        <HomepageHeader {...data} />
      </main>
      <Projects />
      <Resume />
    </>
  );
}
