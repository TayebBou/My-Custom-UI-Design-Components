import { FC, useState } from "react";
import Icon from "../../../atoms/Icon/Icon";
import atom from "../../../../assets/icons/atom.png";
import styles from "./IconSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { iconPropsDocumentation } from "../../../../utils/propsDocumentation";

const IconSample: FC = () => {
  const [iconProps, setIconProps] = useState({
    src: atom,
    alt: "logo",
    className: styles.icon,
    size: "32px",
  });

  /**
   * Handle prop changes from the documentation component
   */
  const handlePropChange = (propName: string, value: boolean | string) => {
    setIconProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  return (
    <div>
      <h2>Icon Component</h2>
      <Icon {...iconProps} />
      <PropsDocumentation
        propsArray={iconPropsDocumentation}
        onPropChange={handlePropChange}
      />
    </div>
  );
};

export default IconSample;
