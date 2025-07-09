import { BUTTON_VARIANT } from "@/constants/buttonVariants";
import clsx from "clsx";
import { Typography } from "./Typography";
import { TYPOGRAPHY_TAG_VARIANT } from "@/constants/typographyVariants";

type Props = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  arialLabel?: string;
  variant?: BUTTON_VARIANT;
  isDisable?: boolean;
};

export const Button = ({
  label,
  onClick,
  className,
  id,
  arialLabel,
  type = "button",
  variant = BUTTON_VARIANT.FILLED,
  isDisable,
}: Props) => {
  return (
    <button
      className={clsx(
        "button font-semibold px-8 py-4 cursor-pointer border-2 border-solid border-black transition-all duration-150",
        variant === BUTTON_VARIANT.FILLED &&
          "text-white bg-black hover:bg-transparent hover:text-black",
        variant === BUTTON_VARIANT.BORDERED &&
          "bg-transparent text-black font-bold hover:bg-black hover:text-white",
        className
      )}
      id={id}
      type={type}
      onClick={onClick}
      aria-label={arialLabel ?? label}
      disabled={isDisable}
    >
      <Typography content={label} variant={TYPOGRAPHY_TAG_VARIANT.SPAN} />
    </button>
  );
};
