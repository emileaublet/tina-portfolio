import { HomepageAchievements } from "@/components/homepage-achievements";
import { HomepageFeatures } from "@/components/homepage-features";
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
      <HomepageFeatures
        featuresTitle={data.data.homepage.featuresTitle}
        features={data.data.homepage.features}
      />
      <HomepageAchievements
        achievementsTitle={data.data.homepage.achievementsTitle}
        achievements={data.data.homepage.achievements}
      />
      <Projects />
    </>
  );
}
