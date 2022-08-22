import { FC, useCallback, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import styles from './SideBarMenu.module.scss'
import expand from '../../../assets/images/expand.png'
import collapse from '../../../assets/images/next.png'
import DropDownItem from '../../molecules/DropDownItem/DropDownItem'

type SideBarMenuProps = {
  options: { path: string; title: string, src?: string, alt?: string }[]
  title: string
  onClose: () => void
  className?: string
  src?: string
  alt?: string
  
}

const SideBarMenu: FC<SideBarMenuProps> = (props) => {
  const { options, title, className, src, alt, onClose } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMenu = useCallback(() => {
    setIsExpanded((x) => !x)
  }, [])

  return (
    <div className={styles['parent-div']}>
      <Button className={styles.menu + ' ' + className} onClick={handleMenu}>
        { src && <Icon
          src={src}
          alt={alt as string}
          size="32px"
        />}
        <h1 className={styles.h1}>{title}</h1>
        <Icon
          src={isExpanded ? expand : collapse}
          alt={isExpanded ? 'expand' : 'collapse'}
          size="32px"
          className={styles['icon-expand']}
        />
      </Button>
      {isExpanded ? (
        <>
          {options.map((element) => (
            <DropDownItem
              path={element.path}
              title={element.title}
              key={element.title}
              className={styles['dropdown-item']}
              src={element.src}
              alt={element.alt}
              onClick={onClose}
            />
          ))}
        </>
      ) : null}
    </div>
  )
}

SideBarMenu.defaultProps = {
  title: '',
  className: '',
  alt: ''
}

export default SideBarMenu
