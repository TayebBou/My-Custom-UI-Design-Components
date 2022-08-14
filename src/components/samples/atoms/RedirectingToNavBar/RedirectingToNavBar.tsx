import { FC } from 'react'
import Icon from '../../../atoms/Icon/Icon'
import up from '../../../../assets/images/up.png'
import styles from './RedirectingToNavBar.module.css'

const RedirectingToNavBar: FC = () => {
  return (
    <>
      <Icon src={up} alt="up arrow" size="40px" className={styles.navbar} />
      <h2>Here is a navBar Sample</h2>
    </>
  )
}

export default RedirectingToNavBar
