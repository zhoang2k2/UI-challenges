import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        "container w-full max-w-[1440px] m-auto px-16 pt-10",
        className
      )}
    >
      {children}
    </div>
  );
};
