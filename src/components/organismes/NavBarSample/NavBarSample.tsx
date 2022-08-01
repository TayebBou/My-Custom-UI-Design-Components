import { FC } from 'react'
import NavBar from '../../atoms/NavBar/NavBar'
import Logo from '../../molecules/Logo/Logo'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import styles from './NavBarSample.module.css'

const NavBarSample: FC = () => {
  const options = [
    {
      path: '/organismes/BigImageSlider',
      title: 'BigImageSlider',
    },
    {
      path: '/organismes/ImageSlider',
      title: 'ImageSlider',
    },
  ]
  return (
    <NavBar className={styles.navbar}>
      <Logo className={styles.logo} />
      <DropDownMenu
        options={options}
        className={styles.dropdownmenu}
        title="UI Organismes"
      />
      <DropDownMenu
        options={options}
        className={styles.dropdownmenu}
        title="UI Molecules"
      />
      <DropDownMenu
        options={options}
        className={styles.dropdownmenu}
        title="UI Atoms"
      />
    </NavBar>
  )
}

export default NavBarSample
