import { FC, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import styles from './SideBar.module.css'
import close from '../../../assets/images/cancel.png'

type SideBarProps = {
  children: React.ReactNode
  onClose: () => void
}

const SideBar: FC<SideBarProps> = (props) => {
  const { children, onClose } = props
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div className={styles.sidebar + ' ' + (isClosing ? styles.out : null)}>
      <div className={styles['sidebar-header']}>
        <Button className={styles['close-button']} onClick={handleClose}>
          <Icon className={styles['close-icon']} alt="close icon" src={close} size="24px" />
        </Button>
      </div>
      {children}
    </div>
  )
}

export default SideBar
