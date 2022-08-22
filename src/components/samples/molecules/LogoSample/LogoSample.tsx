import { FC } from "react";
import Logo from "../../../molecules/Logo/Logo";
import styles from './LogoSample.module.scss'

const LogoSample: FC = () => {
    return (
        <Logo className={styles.logo} />
    )
}

export default LogoSample