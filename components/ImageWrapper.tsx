import clsx from "clsx";

type Props = {
  className?: string;
  src: string;
  alt: string;
};
export const ImageWrapper = ({ src, alt, className }: Props) => {
  return (
    <div className={clsx("overflow-hidden", className)}>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
};
