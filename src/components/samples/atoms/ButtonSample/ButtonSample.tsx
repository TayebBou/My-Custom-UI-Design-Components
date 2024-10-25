import { FC, useState } from "react";
import Button from "../../../atoms/Button/Button";
import styles from "./ButtonSample.module.scss";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { buttonPropsDocumentation } from "../../../../utils/propsDocumentation";

const ButtonSample: FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  /**
   * Callback to handle checkbox changes from PropsDocumentation
   */
  const handlePropChange = (propName: string, value: string | boolean) => {
    if (propName === "disabled" && typeof value === "boolean") {
      setIsDisabled(value);
    }
  };

  return (
    <div>
      <h2>Button Component</h2>
      <Button className={styles.button} disabled={isDisabled}>
        SAMPLE
      </Button>
      <PropsDocumentation
        propsArray={buttonPropsDocumentation}
        onPropChange={handlePropChange}
      />
    </div>
  );
};

export default ButtonSample;
