import { FC, useCallback, useEffect, useRef, useState } from 'react'
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
  const [isFontClosing, setIsFontClosing] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const timeout1 = useRef<NodeJS.Timeout | null>(null)
  const timeout2 = useRef<NodeJS.Timeout | null>(null)

  const handleClose = useCallback(() => {
    setIsFontClosing(true)
    setIsClosing(true)
    timeout1.current = setTimeout(() => {
      setIsSideBarOpen(false)
    }, 170)
    timeout2.current = setTimeout(() => {
      onClose()
    }, 500)
  }, [onClose])

  useEffect(() => {
    if (closeSideBar) {
      handleClose()
    }
    return () => {
      if(timeout1.current !== null) {
        clearTimeout(timeout1.current)
      }
      if(timeout2.current !== null) {
        clearTimeout(timeout2.current)
      }
    }
  }, [closeSideBar, handleClose])

  return (
    <>
      <div className={styles.sidebar + ' ' + (isClosing ? styles.out : '')}>
        <div className={styles['sidebar-header']}>
          <Button className={styles['close-button']} onClick={handleClose}>
            <Icon
              className={styles['close-icon']}
              alt="close icon"
              src={close}
              size="26px"
            />
          </Button>
        </div>
        {children}
      </div>
      {isSideBarOpen && (
        <div className={styles['black-font'] + ' ' + (isFontClosing ? styles['out-black'] : '')} onClick={handleClose} />
      )}
    </>
  )
}

SideBar.defaultProps = {
  closeSideBar: false,
}

export default SideBar
