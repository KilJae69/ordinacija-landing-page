import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  className,
  children,
  invert = false,
  href,
}: {
  className?: string;
  children: ReactNode;
  invert?: boolean;
  href?:string;
  isButton?:boolean
}) {
  return (
    <Link
      href={href || ""}
      className={clsx(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border  font-medium transition-colors focus:outline-none",
        invert
          ? "border-primary-accent  text-primary-accent bg-[linear-gradient(110deg,#fff,45%,#e0f2e9,55%,#fff)]"
          : "border-white text-white bg-[linear-gradient(110deg,#24ae7c,45%,#34d399,55%,#24ae7c)]",
        "bg-[length:200%_100%] px-6",
        className
      )}
    >
      {children}
    </Link>
  );
}
