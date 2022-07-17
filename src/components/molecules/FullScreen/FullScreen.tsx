import { FC } from 'react'
import Button from '../../atoms/Button/Button'
import fullScreen from '../../../assets/images/full_screen.png'
import styles from './FullScreen.module.css'

const FullScreen: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      <img src={fullScreen} alt="full screen" className={styles.img} />
    </Button>
  )
}

export default FullScreen
