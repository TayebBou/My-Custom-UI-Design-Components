import { FC } from "react";
import FullScreen from "../../../molecules/FullScreen/FullScreen";
import styles from './FullScreenSample.module.css'

const FullScreenSample: FC = () => {
    return (
        <FullScreen className={styles.fullscreen} />
    )
}

export default FullScreenSample