import clsx from "clsx";
import { ReactNode } from "react";

export default function Button({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    // Button code
    <button
      className={clsx(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#24ae7c,45%,#34d399,55%,#24ae7c)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      {children}
    </button>
  );
}
