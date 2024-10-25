import { FC, useEffect, useRef, useState } from "react";
import { IPhoto } from "../../../shared/types/photo.model";
import Button from "../../atoms/Button/Button";
import FullScreen from "../../molecules/FullScreen/FullScreen";
import MiniImageSlider from "./MiniImageSlider/MiniImageSlider";
import styles from "./ImageSlider.module.scss";

type ImageSliderProps = {
  photos: IPhoto[];
};

const ImageSlider: FC<ImageSliderProps> = ({ photos }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const images = useRef<HTMLDivElement>(null);

  const handleRight = () => {
    if (imgIndex < photos[1].photos.length - 1)
      setImgIndex((prevIndex) => prevIndex + 1);
  };

  const handleLeft = () => {
    if (imgIndex > 0) setImgIndex((prevIndex) => prevIndex - 1);
  };

  const handleImageSelect = (index: number) => {
    setImgIndex(index);
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div ref={images} className={styles.fullscreen}>
      <div className={styles["full-images"]} data-testid="bigImagesDiv">
        {photos[1].photos.map((p, i) => (
          <img
            key={p.url_full}
            src={p.url_full}
            alt="full-size"
            style={{
              maxWidth: "100%",
              transition: "0.5s",
              transform: `translateX(${imgIndex * -100}%)`,
            }}
          />
        ))}
        <Button
          disabled={imgIndex === photos[1].photos.length - 1}
          className={`${styles["slider-button"]} ${styles.right}`}
          onClick={handleRight}
        >
          {">"}
        </Button>
        <Button
          disabled={imgIndex === 0}
          className={`${styles["slider-button"]} ${styles.left}`}
          onClick={handleLeft}
        >
          {"<"}
        </Button>
        <span className={styles.span}>
          {imgIndex + 1} / {photos[1].photos.length}
        </span>
        {isRendered ? <FullScreen element={images.current} /> : <FullScreen />}
      </div>
      <MiniImageSlider
        photos={photos}
        imgIndex={imgIndex}
        handleRight={handleRight}
        handleLeft={handleLeft}
        onImageSelect={handleImageSelect}
      />
    </div>
  );
};

export default ImageSlider;
