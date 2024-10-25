import { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon/Icon";
import styles from "./DropDownItem.module.scss";

type DropDownItemProps = {
  className?: string;
  path: string;
  title: string;
  onClick?: () => void;
  src?: string;
  alt?: string;
};

const DropDownItem: FC<DropDownItemProps> = ({
  onClick = () => {},
  path = "/",
  title = "",
  className = "",
  alt = "",
  src,
}) => (
  <Link to={path} onClick={onClick} className={styles.link + " " + className}>
    {src && <Icon src={src} alt={alt as string} size="28px" />}
    <h2 className={styles.h2} data-item-title={title}>
      {title}
    </h2>
  </Link>
);

export default DropDownItem;
