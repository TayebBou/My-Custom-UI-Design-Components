import { FC } from "react";
import Button from "../../atoms/Button/Button";
import fullScreen from "../../../assets/icons/full_screen.png";
import styles from "./FullScreen.module.scss";
import Icon from "../../atoms/Icon/Icon";

type FullScreenProps = {
  element?: HTMLElement | null;
  className?: string;
};

const FullScreen: FC<FullScreenProps> = ({ className = "", element }) => {
  const switchFullScreen = () => {
    if (element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    } else {
      if (!document.fullscreenElement) {
        document.firstElementChild?.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <Button
      className={styles.button + " " + className}
      onClick={switchFullScreen}
    >
      <Icon src={fullScreen} alt="full screen" className={styles.img} />
    </Button>
  );
};

export default FullScreen;
