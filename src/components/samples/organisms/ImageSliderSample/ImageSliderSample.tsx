import { FC } from "react";
import ImageSlider from "../../../organisms/ImageSlider/ImageSlider";
import styles from "./ImageSliderSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { imageSliderPropsDocumentation } from "../../../../utils/propsDocumentation";
import data from "../../../../assets/data/data.json";

const ImageSliderSample: FC = () => (
  <>
    <h2>ImageSlider Component</h2>
    <div className={styles.wrapper}>
      <ImageSlider photos={data.photos} />
    </div>
    <PropsDocumentation propsArray={imageSliderPropsDocumentation} />
  </>
);

export default ImageSliderSample;
