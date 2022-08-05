import { FC, useCallback, useEffect, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import NavBar from '../../atoms/NavBar/NavBar'
import Logo from '../../molecules/Logo/Logo'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import styles from './NavBarSample.module.css'
import hamburger from '../../../assets/images/hamburger.png'
import SideBar from '../SideBar/SideBar'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import organism from '../../../assets/images/organism.png'
import molecule from '../../../assets/images/molecule.png'
import atom from '../../../assets/images/atom.png'
import bigImageSlider from '../../../assets/images/bigImageSlider.png'
import imageSlider from '../../../assets/images/imageSlider.png'

const NavBarSample: FC = () => {
  const options = [
    {
      path: '/organismes/BigImageSlider',
      title: 'BigImageSlider',
      src: bigImageSlider,
      alt: "Big Image Slider"
    },
    {
      path: '/organismes/ImageSlider',
      title: 'ImageSlider',
      src: imageSlider,
      alt: "Image Slider"
    },
  ]
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [displaySide, setDisplaySide] = useState(false)

  const handleResize = useCallback(() => {
    if (window.innerWidth < 900) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <>
      {isSmallScreen && displaySide && (
        <SideBar
          onClose={() => {
            setDisplaySide(false)
          }}
        >
            <SideBarMenu
              options={options}
              src={organism}
              alt="organism"
              title="UI Organismes"
            />
            <SideBarMenu
              options={options}
              src={molecule}
              alt="molecule"
              title="UI Molecules"
            />
            <SideBarMenu
              options={options}
              src={atom}
              alt="atom"
              title="UI Atoms"
            />
        </SideBar>
      )}
      <NavBar className={styles.navbar}>
        {isSmallScreen && (
          <Button
            className={styles.hamburger}
            onClick={() => setDisplaySide(true)}
          >
            <Icon
              className={styles.icon}
              src={hamburger}
              alt="hamburger icon"
              size="32px"
            />
          </Button>
        )}
        <Logo className={styles.logo} />

        {!isSmallScreen && (
          <DropDownMenu
            options={options}
            className={styles.dropdownmenu}
            title="UI Organismes"
          />
        )}
        {!isSmallScreen && (
          <DropDownMenu
            options={options}
            className={styles.dropdownmenu}
            title="UI Molecules"
          />
        )}
        {!isSmallScreen && (
          <DropDownMenu
            options={options}
            className={styles.dropdownmenu}
            title="UI Atoms"
          />
        )}
      </NavBar>
    </>
  )
}

export default NavBarSample
