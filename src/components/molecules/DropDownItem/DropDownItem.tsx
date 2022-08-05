import { FC } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../atoms/Icon/Icon'
import styles from './DropDownItem.module.css'

type DropDownItemProps = {
  className?: string
  path: string
  title: string
  onClick?: () => void
  src?: string
  alt?: string
}

const DropDownItem: FC<DropDownItemProps> = (props) => {
  const { path, title, onClick, className, src, alt } = props

  return (
    <Link
      to={path}
      onClick={onClick}
      className={styles.link + ' ' + className}
    >
      {src && <Icon src={src} alt={alt as string} size="28px" />}
      <h2 className={styles.h2}>{title}</h2>
    </Link>
  )
}

DropDownItem.defaultProps = {
  onClick: () => {},
  path: '/',
  title: '',
  className: '',
  alt: ''
}

export default DropDownItem
