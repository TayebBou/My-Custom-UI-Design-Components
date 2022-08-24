import { FC, useEffect, useRef, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import styles from './Modal.module.scss'
import close from '../../../assets/images/cancel.png'

type ModalProps = {
  onDisplay: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  title?: string
}

const Modal: FC<ModalProps> = (props) => {
  const { onDisplay, children, onClose, className, title } = props
  const [exiting, setExiting] = useState(false)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const handleClose = () => {
    setExiting(true)
    timeout.current = setTimeout(() => {
      onClose()
      setExiting(false)
    }, 170)
  }

  useEffect(() => {
    if (!onDisplay) {
      if (timeout.current !== null) {
        clearTimeout(timeout.current)
      }
    }
  }, [onDisplay])

  return (
    <>
      {onDisplay && (
        <>
          <div
            className={
              styles.modal +
              ' ' +
              className +
              ' ' +
              (exiting ? styles['out-modal'] : '')
            }
          >
            <div className={styles.header}>
              <h1>{title}</h1>
              <Button className={styles['close-button']} onClick={handleClose}>
                <Icon
                  className={styles['close-icon']}
                  alt="close icon"
                  src={close}
                  size="17px"
                />
              </Button>
            </div>
            <div className={styles.body}>{children}</div>
          </div>
          <div
            className={
              styles['black-font'] + ' ' + (exiting ? styles['out-black'] : '')
            }
            onClick={handleClose}
          />
        </>
      )}
    </>
  )
}

Modal.defaultProps = {
  className: '',
  title: '',
}

export default Modal
