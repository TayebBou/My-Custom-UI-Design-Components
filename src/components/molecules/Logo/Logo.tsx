import { FC } from "react";
import Icon from "../../atoms/Icon/Icon";
import logo from "../../../assets/icons/ui.png";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  isInverted?: boolean;
};

const Logo: FC<LogoProps> = ({ className = "", isInverted = false }) => (
  <Link to="/" className={`${styles.logo} ${className}`}>
    <Icon src={logo} alt="logo" size="44px" isInverted={isInverted} />
    <h1 className={styles.h1}>
      My Custom <br />
      <span className={styles.span}>UI Design Components</span>
    </h1>
  </Link>
);

export default Logo;
