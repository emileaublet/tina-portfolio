import client from "@/tina/__generated__/client";
import Link from "next/link";

export default async function Page() {
  const { data } = await client.queries.projectConnection();

  return (
    <>
      <div>
        {data.projectConnection.edges?.map((project) => (
          <div key={project?.node?.id}>
            <Link href={`/projects/${project?.node?._sys.filename}`}>
              {project?.node?._sys.filename}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
