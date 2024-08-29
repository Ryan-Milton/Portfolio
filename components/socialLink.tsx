import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

export default function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: any;
  children?: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <FontAwesomeIcon
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500"
          icon={Icon}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}
