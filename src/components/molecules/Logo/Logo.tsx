import { FC } from 'react'
import Icon from '../../atoms/Icon/Icon'
import logo from '../../../assets/images/ui.png'
import styles from './Logo.module.css'

type LogoProps = {
  className?: string
}

const Logo: FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <div className={`${styles.logo} ${className}`}>
      <Icon src={logo} alt="logo" size='44px' />
      <h1 className={styles.h1}>
        My Custom <br />
        <span className={styles.span}>UI Design Components</span>
      </h1>
    </div>
  )
}

Logo.defaultProps = {
  className: '',
}

export default Logo
