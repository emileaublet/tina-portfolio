import { ArrowRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "./link";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 p-4 group/nav bg-gradient-to-b from-black via-30% via-black to-black/0 z-50">
      <div className="bg-neutral-900/70 backdrop-blur-xl shadow-xl group-hover/nav:bg-primary-500 transition-colors px-4 py-3 rounded-xl flex">
        <Link href="/" className="text-neutral-500 group-hover/nav:text-black ">
          Jeffrey<span className="hidden sm:block ml-1"> Julio-Vietz</span>
        </Link>
        <div className="grow flex justify-end items-center gap-6">
          <Link
            withArrow={false}
            href="/#projects"
            className="text-neutral-500 group-hover/nav:text-black "
          >
            Projects
          </Link>
          <Link
            withArrow={false}
            href="/#education"
            className="text-neutral-500 group-hover/nav:text-black "
          >
            Education
          </Link>
          <Link
            withArrow={false}
            href="https://www.linkedin.com/in/jeffreyvietz/"
            className="text-neutral-500 group-hover/nav:text-black "
          >
            <span className="hidden sm:block">LinkedIn</span>
            <LinkedInLogoIcon className="size-5 sm:hidden" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
