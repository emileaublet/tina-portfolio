import { TbSchool } from "react-icons/tb";

export const Resume = () => {
  return (
    <div className="mt-24 container">
      <div className="grid ">
        <h2 className="text-white text-4xl font-bold flex gap-4 mb-6">
          Education & Formations
        </h2>
        <ResumeItem
          title="Master's degree, Interaction Design"
          description="Université Laval, Québec"
        />
        <ResumeItem
          title="Bachelor's degree, Graphic Design"
          description="Université Laval, Québec"
        />
        <ResumeItem
          title=" Design Tradeoffs and UX Decisions-Making"
          description="Nielsen Norman Group"
        />
      </div>
    </div>
  );
};

const ResumeItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mt-6 flex items-center gap-4 ml-4 relative" id="education">
      <div className="absolute size-2 rounded-full bg-primary-500 top-2.5 -left-4" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  );
};
