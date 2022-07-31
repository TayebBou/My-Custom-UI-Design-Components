import { FC } from 'react'
import NavBar from '../../atoms/NavBar/NavBar'
import Logo from '../../molecules/Logo/Logo'
import styles from './NavBarSample.module.css'

const NavBarSample: FC = () => {
  return (
    <NavBar className={styles.navbar}>
      <Logo />
    </NavBar>
  )
}

export default NavBarSample
