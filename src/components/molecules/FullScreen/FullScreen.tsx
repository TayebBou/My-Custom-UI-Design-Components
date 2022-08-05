import { FC } from 'react'
import Button from '../../atoms/Button/Button'
import fullScreen from '../../../assets/images/full_screen.png'
import styles from './FullScreen.module.css'
import Icon from '../../atoms/Icon/Icon'


const FullScreen: FC<{ element?: HTMLElement }> = ({ element }) => {

  const openFullScreen = () => {
    if(element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    } else {
      if (!document.fullscreenElement) {
        document.firstElementChild?.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    }
  }

  return (
    <Button className={styles.button} onClick={openFullScreen}>
      <Icon src={fullScreen} alt="full screen" className={styles.img} />
    </Button>
  )
}

export default FullScreen
