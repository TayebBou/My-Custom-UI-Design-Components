import { FC } from "react";
import Icon from "../../../atoms/Icon/Icon";
import up from "../../../../assets/icons/up.png";
import styles from "./RedirectingToNavBar.module.scss";
import { navBarPropsDocumentation } from "../../../../utils/propsDocumentation";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";

const RedirectingToNavBar: FC = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Icon src={up} alt="up arrow" size="40px" />
        <h2>Here is a navBar Sample</h2>
      </div>
      <PropsDocumentation propsArray={navBarPropsDocumentation} />
    </>
  );
};

export default RedirectingToNavBar;
