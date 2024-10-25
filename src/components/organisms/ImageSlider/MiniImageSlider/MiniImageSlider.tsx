import { FC, useCallback, useEffect, useRef, useState } from "react";
import { IPhoto } from "../../../../shared/types/photo.model";
import Button from "../../../atoms/Button/Button";
import styles from "./MiniImageSlider.module.scss";

type MiniImageSliderProps = {
  photos: IPhoto[];
  imgIndex: number;
  handleRight: () => void;
  handleLeft: () => void;
  onImageSelect: (index: number) => void;
};

const MiniImageSlider: FC<MiniImageSliderProps> = ({
  photos,
  imgIndex,
  handleRight,
  handleLeft,
  onImageSelect,
}) => {
  const miniImages = useRef<HTMLDivElement>(null);
  const [newStyle, SetNewStyle] = useState("0");
  const [x, setX] = useState(0);

  /** handling screen size when change*/
  const handleResize = useCallback(() => {
    const element = miniImages.current as HTMLDivElement;
    const miniImageWidth = element.offsetWidth;
    // two mini images only when mini images div is between 306 px and 391 px
    if (miniImageWidth < 391 && miniImageWidth > 305) {
      SetNewStyle("calc(25% - 46px)");
      setX(Math.floor(imgIndex / 2) * -miniImageWidth);
      // one mini image only when mini images is under or equal 305px
    } else if (miniImageWidth <= 305) {
      SetNewStyle("calc(50% - 46px)");
      setX(imgIndex * -miniImageWidth);
      // three mini images only when mini images div is equal or over 391px
    } else {
      setX(Math.floor(imgIndex / 3) * -miniImageWidth);
      SetNewStyle("calc(16.66% - 46px)");
    }
  }, [imgIndex]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className={styles["mini-images"]} data-testid="imagesDiv">
      <Button
        disabled={imgIndex === 0}
        className={styles["slider-button"]}
        onClick={handleLeft}
      >
        {"<"}
      </Button>
      <div
        className={styles.images}
        ref={miniImages}
        data-testid="miniImagesDiv"
      >
        {photos[1].photos.map((p, i) => (
          <img
            key={p.url_vignette}
            src={p.url_vignette}
            alt="thumbnail"
            style={{
              maxWidth: "92px",
              margin: `1.5em ${newStyle}`,
              outline: i === imgIndex ? "solid 0.2em white" : "",
              transition: "transform 0.5s",
              transform: `translateX(${x}px)`,
              cursor: "pointer",
            }}
            onClick={() => onImageSelect(i)}
          />
        ))}
      </div>
      <Button
        disabled={imgIndex === photos[1].photos.length - 1}
        className={styles["slider-button"]}
        onClick={handleRight}
      >
        {">"}
      </Button>
    </div>
  );
};

export default MiniImageSlider;
