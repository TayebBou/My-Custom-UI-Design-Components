import { FC } from "react";
import Button from "../../../atoms/Button/Button";
import styles from './ButtonSample.module.scss'

const ButtonSample:FC = () => {
    return (
        <Button className={styles.button}>
            SAMPLE
        </Button>
    )
}

export default ButtonSample