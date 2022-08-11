import { FC } from 'react'
import Button from '../../../atoms/Button/Button'
import Icon from '../../../atoms/Icon/Icon'
import styles from './SideBarSample.module.css'
import hamburger from '../../../../assets/images/hamburger.png'
import { useDispatch } from 'react-redux'
import { navBarActions } from '../../../../config/stateSlices/navBarSlice'

const SideBarSample: FC = () => {

  const dispatch = useDispatch()

  return (
      <Button className={styles.hamburger} onClick={() => dispatch(navBarActions.switchSideBar())}>
        <Icon src={hamburger} alt="hamburger icon" size="32px" />
      </Button>
  )
}

export default SideBarSample
