import { FC } from 'react'
import styles from './NavBar.module.css'

type NavBarProps = {
  children: React.ReactNode
  fixed?: boolean
  className?: string
}

const NavBar: FC<NavBarProps> = (props) => {
  const { children, fixed, className } = props

  return (
    <div
      className={`${styles.navbar} ${className}`}
      style={fixed ? { position: 'fixed' } : {}}
    >
      {children}
    </div>
  )
}

NavBar.defaultProps = {
    fixed: false,
    className: ''
}

export default NavBar
