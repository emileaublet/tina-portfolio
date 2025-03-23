import { HomepageQuery } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const HomepageFeatures = ({
  features,
  featuresTitle,
}: {
  featuresTitle: HomepageQuery["homepage"]["featuresTitle"];
  features: HomepageQuery["homepage"]["features"];
}) => {
  return (
    <div className="mt-24 container" id="features">
      <h2 className="text-white text-4xl font-bold flex gap-4 mb-6">
        {featuresTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features?.map((feature, i) => (
          <div className="mt-16" key={i}>
            <p className="text-xl font-semibold mb-6">
              {feature?.feature?.title}
            </p>
            <ul className="text-lg text-neutral-800 dark:text-neutral-200 ml-4">
              {feature?.feature?.description?.map((desc, i) => (
                <li className="relative mb-2" key={i}>
                  <div className="absolute size-1.5 rounded-full bg-primary-500 top-3 -left-4" />

                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
