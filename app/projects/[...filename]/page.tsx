import client from "@/tina/__generated__/client";
import Project from "./client-page";

export async function generateStaticParams() {
  const pages = await client.queries.projectConnection();
  const paths = pages.data?.projectConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function ProjectPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.project({
    relativePath: `${params.filename}.mdx`,
  });

  return <Project {...data} />;
}
