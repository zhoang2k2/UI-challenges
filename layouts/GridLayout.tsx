import clsx from "clsx";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const GridLayout = ({ children, className }: Props) => {
  return (
    <div className={clsx("grid grid-cols-12 gap-4", className)}>{children}</div>
  );
};

export default GridLayout;
