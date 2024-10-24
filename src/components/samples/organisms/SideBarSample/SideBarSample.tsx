import { FC } from "react";
import Button from "../../../atoms/Button/Button";
import Icon from "../../../atoms/Icon/Icon";
import styles from "./SideBarSample.module.scss";
import hamburger from "../../../../assets/icons/hamburger.png";
import down from "../../../../assets/icons/down.png";
import { useDispatch } from "react-redux";
import { navBarActions } from "../../../../config/stateSlices/navBarSlice";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { sideBarPropsDocumentation } from "../../../../utils/propsDocumentation";

const SideBarSample: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles["parent-div"]}>
      <h2>Click on hamburger menu to deploy the sideBar</h2>
      <Icon src={down} alt="down arrow" size="40px" />
      <Button
        className={styles.hamburger}
        onClick={() => dispatch(navBarActions.switchSideBar())}
      >
        <Icon src={hamburger} alt="hamburger icon" size="32px" />
      </Button>
      <PropsDocumentation propsArray={sideBarPropsDocumentation} />
    </div>
  );
};

export default SideBarSample;
