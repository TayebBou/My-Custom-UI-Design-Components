import { FC, useEffect } from 'react'
import Button from '../../../atoms/Button/Button'
import Icon from '../../../atoms/Icon/Icon'
import NavBar from '../../../atoms/NavBar/NavBar'
import Logo from '../../../molecules/Logo/Logo'
import DropDownMenu from '../../../organisms/DropDownMenu/DropDownMenu'
import styles from './NavBarSample.module.css'
import SideBar from '../../../organisms/SideBar/SideBar'
import SideBarMenu from '../../../organisms/SideBarMenu/SideBarMenu'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGES, OPTIONS_ORGANISMS, OPTIONS_MOLECULES, OPTIONS_ATOMS } from '../../../../config/constants'
import { navBarActions } from '../../../../config/stateSlices/navBarSlice'
import { IRootState } from '../../../../shared/types/rootState.model'

const NavBarSample: FC = () => {
  const isSmallScreen = useSelector((state:IRootState) => state.navBar.isSmallScreen)
  const displaySide = useSelector((state:IRootState) => state.navBar.displaySide)
  const closeSideBar = useSelector((state:IRootState) => state.navBar.closeSideBar)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => dispatch(navBarActions.handleResize())
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dispatch])

  return (
    <>
      {displaySide && (
        <SideBar
          closeSideBar={closeSideBar}
          onClose={() => {
            dispatch(navBarActions.setDisplaySide(false))
          }}
        >
            <SideBarMenu
              options={OPTIONS_ORGANISMS}
              src={IMAGES.organism}
              alt="organism"
              title="UI Organisms"
              onClose={() => {
                dispatch(navBarActions.setCloseSideBar(true))
              }}
            />
            <SideBarMenu
              options={OPTIONS_MOLECULES}
              src={IMAGES.molecule}
              alt="molecule"
              title="UI Molecules"
              onClose={() => {
                dispatch(navBarActions.setCloseSideBar(true))
              }}
            />
            <SideBarMenu
              options={OPTIONS_ATOMS}
              src={IMAGES.atom}
              alt="atom"
              title="UI Atoms"
              onClose={() => {
                dispatch(navBarActions.setCloseSideBar(true))
              }}
            />
        </SideBar>
      )}
      <NavBar className={styles.navbar}>
        {isSmallScreen && (
          <Button
            className={styles.hamburger}
            onClick={() => dispatch(navBarActions.switchSideBar())}
          >
            <Icon
              className={styles.icon}
              src={IMAGES.hamburger}
              alt="hamburger icon"
              size="32px"
            />
          </Button>
        )}
        <Logo className={styles.logo} />

        {!isSmallScreen && (
          <DropDownMenu
            options={OPTIONS_ORGANISMS}
            className={styles.dropdownmenu}
            title="UI Organisms"
          />
        )}
        {!isSmallScreen && (
          <DropDownMenu
            options={OPTIONS_MOLECULES}
            className={styles.dropdownmenu}
            title="UI Molecules"
          />
        )}
        {!isSmallScreen && (
          <DropDownMenu
            options={OPTIONS_ATOMS}
            className={styles.dropdownmenu}
            title="UI Atoms"
          />
        )}
      </NavBar>
    </>
  )
}

export default NavBarSample
