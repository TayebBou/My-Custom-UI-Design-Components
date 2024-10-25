import { FC } from "react";
import styles from "./NavBar.module.scss";

type NavBarProps = {
  children: React.ReactNode;
  fixed?: boolean;
  className?: string;
};

const NavBar: FC<NavBarProps> = ({
  fixed = false,
  className = "",
  children,
}) => (
  <div
    className={`${styles.navbar} ${className}`}
    style={fixed ? { position: "fixed" } : {}}
  >
    {children}
  </div>
);

export default NavBar;
