import Image from "next/image";
import Link from "next/link";

export type ProjectProps = {
  title: string;
  description?: string | null;
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
        className="saturate-0 opacity-40 transition-all group-hover/project:saturate-100 group-hover/project:opacity-100 object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={image}
        alt={title}
      />
      <div className="absolute p-3 md:p-6 bottom-0 bg-black/50 w-full group-hover/project:bg-primary-500 group-hover/project:text-black transition-colors">
        <h3 className="text-2xl md:text-3xl  font-bold">{title}</h3>
        <p className="md:text-lg">{description}</p>
      </div>
    </Link>
  );
};
