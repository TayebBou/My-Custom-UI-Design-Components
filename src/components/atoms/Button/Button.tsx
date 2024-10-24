import { FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonTypes {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: ButtonTypes;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  onClick = () => {},
  className = "",
  type = ButtonTypes.BUTTON,
  disabled = false,
  children,
}) => (
  <button
    onClick={onClick}
    className={styles.button + " " + className}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
