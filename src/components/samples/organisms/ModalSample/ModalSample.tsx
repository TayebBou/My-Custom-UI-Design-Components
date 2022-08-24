import { FC, useState } from 'react'
import Button from '../../../atoms/Button/Button'
import Icon from '../../../atoms/Icon/Icon'
import modal from '../../../../assets/images/modal.png'
import styles from './ModalSample.module.css'
import down from '../../../../assets/images/down.png'
import Modal from '../../../organisms/Modal/Modal'

const ModalSample: FC = () => {

  const [display, setDisplay] = useState(false)

  const handleClose = () => {
    setDisplay(false)
  }

  return (
    <div className={styles['parent-div']}>
      <h2>Click here to deploy my custom ui modal organism</h2>
      <Icon src={down} alt="down arrow" size="40px" />
      <Button
        className={styles.modal}
        onClick={() => { setDisplay(true) }}
      >
        <Icon src={modal} alt="modal icon" size="32px" />
      </Button>
      <Modal title='Sample modal' onClose={handleClose} onDisplay={display}>
        <p>
          This is a sample modal using my custon modal ui organism.
        </p>
      </Modal>
    </div>
  )
}

export default ModalSample
