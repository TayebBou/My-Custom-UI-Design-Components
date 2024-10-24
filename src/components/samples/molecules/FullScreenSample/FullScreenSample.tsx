import { FC } from "react";
import FullScreen from "../../../molecules/FullScreen/FullScreen";
import styles from "./FullScreenSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { fullScreenPropsDocumentation } from "../../../../utils/propsDocumentation";

const FullScreenSample: FC = () => (
  <>
    <h2>FullScreen Component</h2>
    <FullScreen className={styles.fullscreen} />
    <PropsDocumentation propsArray={fullScreenPropsDocumentation} />
  </>
);

export default FullScreenSample;
