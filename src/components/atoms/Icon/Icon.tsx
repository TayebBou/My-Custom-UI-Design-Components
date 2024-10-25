import { FC } from "react";

type IconProps = {
  src: string;
  alt: string;
  className?: string;
  size?: string;
  isInverted?: boolean;
};

const Icon: FC<IconProps> = ({
  className = "",
  src,
  alt,
  size,
  isInverted = false,
}) => (
  <img
    className={className}
    style={{
      width: size,
      height: size,
      filter: isInverted ? "invert(1)" : "none",
    }}
    src={src}
    alt={alt}
  />
);

export default Icon;
