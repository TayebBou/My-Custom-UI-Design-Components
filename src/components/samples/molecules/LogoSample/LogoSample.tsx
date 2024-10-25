import { FC } from "react";
import Logo from "../../../molecules/Logo/Logo";
import styles from "./LogoSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { logoPropsDocumentation } from "../../../../utils/propsDocumentation";

const LogoSample: FC = () => (
  <>
    <h2>Logo Component</h2>
    <Logo className={styles.logo} isInverted />
    <PropsDocumentation propsArray={logoPropsDocumentation} />
  </>
);

export default LogoSample;
