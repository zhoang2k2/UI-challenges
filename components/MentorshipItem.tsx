import { TYPOGRAPHY_TAG_VARIANT } from "@/constants/typographyVariants";
import { Typography } from "./Typography";

type Props = {
  title: string;
  content: string;
};

export const MentorshipItem = ({ title, content }: Props) => {
  return (
    <li className="mentorship-item flex flex-col gap-2">
      <Typography
        className="mentor-ship-title uppercase font-semibold"
        content={title}
        variant={TYPOGRAPHY_TAG_VARIANT.SPAN}
      />

      <Typography className="mentor-ship-content" content={content} />
    </li>
  );
};
