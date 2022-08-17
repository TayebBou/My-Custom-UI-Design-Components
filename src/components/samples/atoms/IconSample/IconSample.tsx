import { FC } from "react";
import Icon from "../../../atoms/Icon/Icon";
import atom from '../../../../assets/images/atom.png'
import styles from './IconSample.module.css'

const IconSample: FC = () => {
    return (
        <Icon src={atom} alt="logo" className={styles.icon} />
    )
}

export default IconSample