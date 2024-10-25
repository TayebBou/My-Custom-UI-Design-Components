import { FC, useEffect, useRef, useState } from "react";
import { IPhoto } from "../../../shared/types/photo.model";
import Button from "../../atoms/Button/Button";
import FullScreen from "../../molecules/FullScreen/FullScreen";
import styles from "./BigImageSlider.module.scss";

type BigImageSliderProps = {
  photos: IPhoto[];
};

const BigImageSlider: FC<BigImageSliderProps> = (props) => {
  const photos = props.photos[0].photos;

  const [x, setX] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const images: React.LegacyRef<HTMLDivElement> = useRef(null);

  const handleRight = () => {
    if (
      photos.length &&
      photos.length > 1 &&
      x > -100 * (photos.length - 1) &&
      x <= 0 &&
      x % 100 === 0 &&
      Number.isInteger(x)
    ) {
      setX((x) => x - 100);
    }
  };

  const handleLeft = () => {
    if (
      photos.length &&
      photos.length > 1 &&
      x < 0 &&
      x >= -100 * (photos.length - 1) &&
      x % 100 === 0 &&
      Number.isInteger(x)
    ) {
      setX((x) => x + 100);
    }
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div ref={images} className={styles.fullscreen}>
      <div className={styles["full-images"]}>
        {photos.map((p) => (
          <img
            key={p.url_full}
            src={p.url_full}
            alt="car outside"
            style={{
              maxWidth: "100%",
              transition: "0.5s",
              transform: `translateX(${x}%)`,
            }}
          />
        ))}
        <Button
          disabled={x === -100 * (photos.length - 1)}
          className={`${styles["slider-button"]} ${styles.right}`}
          onClick={handleRight}
        >
          {">"}
        </Button>
        <Button
          disabled={x === 0}
          className={`${styles["slider-button"]} ${styles.left}`}
          onClick={handleLeft}
        >
          {"<"}
        </Button>
        <span className={styles.span}>
          {Math.abs(x / 100) + 1} / {photos.length}
        </span>
        {isRendered ? (
          <FullScreen element={images.current as HTMLElement} />
        ) : (
          <FullScreen />
        )}
      </div>
    </div>
  );
};

export default BigImageSlider;
