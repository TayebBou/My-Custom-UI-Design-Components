import { FC, useCallback, useEffect, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import styles from './SideBar.module.css'
import close from '../../../assets/images/cancel.png'

type SideBarProps = {
  children: React.ReactNode
  onClose: () => void
  closeSideBar?: boolean
}

const SideBar: FC<SideBarProps> = (props) => {
  const { children, onClose, closeSideBar } = props
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 500)
  },[onClose])

  useEffect(() => {
    if(closeSideBar){
      handleClose()
    }      
  },[closeSideBar, handleClose])

  return (
    <div className={styles.sidebar + ' ' + (isClosing ? styles.out : '')}>
      <div className={styles['sidebar-header']}>
        <Button className={styles['close-button']} onClick={handleClose}>
          <Icon className={styles['close-icon']} alt="close icon" src={close} size="26px" />
        </Button>
      </div>
      {children}
    </div>
  )
}

SideBar.defaultProps = {
  closeSideBar: false
}

export default SideBar
