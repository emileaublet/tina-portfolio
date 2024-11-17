import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cx } from "class-variance-authority";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
}
export const Link = ({
  href,
  className,
  children,
  withArrow = true,
}: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={cx(
        "font-bold transition-colors flex items-center group/link",
        !withArrow && "hover:underline hover:underline-offset-2",
        className
      )}
    >
      {children}
      {withArrow && (
        <span className="-ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all">
          <ArrowRightIcon className="size-5 ml-1 mr-4" />
        </span>
      )}
    </NextLink>
  );
};
