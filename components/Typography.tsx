import {
  TYPOGRAPHY_CLASSNAME,
  TYPOGRAPHY_TAG_VARIANT,
} from "@/constants/typographyVariants";
import clsx from "clsx";
import type { JSX } from "react";

type Props = {
  content: string | JSX.Element;
  variant?: TYPOGRAPHY_TAG_VARIANT;
  className?: string;
};
export const Typography = ({
  content,
  className,
  variant = TYPOGRAPHY_TAG_VARIANT.PARAGRAPH,
}: Props) => {
  const Tag = variant;

  return (
    <Tag className={clsx(TYPOGRAPHY_CLASSNAME[variant], className)}>
      {content}
    </Tag>
  );
};
