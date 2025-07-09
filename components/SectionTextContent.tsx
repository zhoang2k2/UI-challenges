import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const SectionTextContent = ({ children, className }: Props) => {
  return (
    <div
      className={clsx("flex flex-col gap-8 pt-6 w-full max-w-[88%]", className)}
    >
      {children}
    </div>
  );
};
