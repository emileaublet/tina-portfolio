import { HomepageQuery } from "@/tina/__generated__/types";

export const HomepageAchievements = ({
  achievements,
  achievementsTitle,
}: {
  achievementsTitle: HomepageQuery["homepage"]["achievementsTitle"];
  achievements: HomepageQuery["homepage"]["achievements"];
}) => {
  return (
    <div className="mt-24 container" id="achievements">
      <h2 className="text-white text-4xl font-bold flex gap-4 mb-6">
        {achievementsTitle}
      </h2>
      {achievements?.map((achievement, i) => (
        <div className="mt-6 flex items-center gap-4 ml-4 relative" key={i}>
          <div className="absolute size-2 rounded-full bg-primary-500 top-2.5 -left-4" />
          <div>
            <h3 className="text-xl font-semibold">
              {achievement?.certification}
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {achievement?.entity} ({achievement?.date})
            </p>
            {achievement?.url && (
              <a
                href={achievement?.url}
                className="text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {achievement?.urlDescription ?? achievement?.url}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
