import Image from "next/image";
import Link from "next/link";

export type ProjectProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export const Project = ({ title, description, image, slug }: ProjectProps) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="w-full relative aspect-video rounded-xl overflow-hidden group/project"
    >
      <Image
        className="saturate-0 opacity-40 transition-all group-hover/project:saturate-100 group-hover/project:opacity-100"
        layout="fill"
        objectFit="cover"
        src={image}
        alt={title}
      />
      <div className="absolute p-6 bottom-0 bg-black/50 w-full group-hover/project:bg-primary-500 group-hover/project:text-black transition-colors">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </Link>
  );
};
