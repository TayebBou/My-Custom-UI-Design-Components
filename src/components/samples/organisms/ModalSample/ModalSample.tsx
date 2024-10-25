import { FC, useState } from "react";
import Button from "../../../atoms/Button/Button";
import Icon from "../../../atoms/Icon/Icon";
import modal from "../../../../assets/icons/modal.png";
import styles from "./ModalSample.module.scss";
import down from "../../../../assets/icons/down.png";
import Modal from "../../../organisms/Modal/Modal";
import PropsDocumentation from "../../PropsDocumentation/PropsDocumentation";
import { modalPropsDocumentation } from "../../../../utils/propsDocumentation";

const ModalSample: FC = () => {
  const [modalProps, setModalProps] = useState({
    onDisplay: false,
    onClose: () => setModalProps((prev) => ({ ...prev, onDisplay: false })),
    title: "Sample modal",
    className: "",
    children: <p>This is a sample modal using my custom modal UI organism.</p>,
  });

  /**
   * Handle prop changes from the documentation component
   */
  const handlePropChange = (propName: string, value: boolean | string) => {
    setModalProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  return (
    <div className={styles["parent-div"]}>
      <h2>Click here to deploy my custom ui modal organism</h2>
      <Icon src={down} alt="down arrow" size="40px" />
      <Button
        className={styles.modal}
        onClick={() => setModalProps((prev) => ({ ...prev, onDisplay: true }))}
      >
        <Icon src={modal} alt="modal icon" size="32px" />
      </Button>
      <Modal {...modalProps}>
        <p>This is a sample modal using my custon modal ui organism.</p>
      </Modal>
      <PropsDocumentation
        propsArray={modalPropsDocumentation}
        onPropChange={handlePropChange}
      />
    </div>
  );
};

export default ModalSample;
