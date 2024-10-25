import { FC } from "react";
import BigImageSlider from "../../../organisms/BigImageSlider/BigImageSlider";
import styles from "./BigImageSliderSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { bigImageSliderPropsDocumentation } from "../../../../utils/propsDocumentation";
import data from "../../../../assets/data/data.json";

const BigImageSliderSample: FC = () => (
  <>
    <h2>BigImageSlider Component</h2>
    <div className={styles.wrapper}>
      <BigImageSlider photos={data.photos} />
    </div>
    <PropsDocumentation propsArray={bigImageSliderPropsDocumentation} />
  </>
);

export default BigImageSliderSample;
