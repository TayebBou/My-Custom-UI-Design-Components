import { FC, useEffect, useRef, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import expand from '../../../assets/images/expand.png'
import collapse from '../../../assets/images/next.png'
import styles from './DropDownMenu.module.css'
import DropDownItem from '../../molecules/DropDownItem/DropDownItem'

type DropDownMenuProps = {
  options: { path: string; title: string }[]
  title: string
  className?: string
}

const DropDownMenu: FC<DropDownMenuProps> = (props) => {
  const { options, title, className } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMenu = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (isExpanded) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          handleMenu()
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [wrapperRef.current])

  return (
    <div ref={wrapperRef} className={styles['parent-div']}>
      <Button className={styles.menu + ' ' + className} onClick={handleMenu}>
        <Icon
          className={styles.icon}
          src={isExpanded ? expand : collapse}
          alt={isExpanded ? 'expand' : 'collapse'}
        />
        <h1 className={styles.h1}>{title}</h1>
      </Button>
      {isExpanded ? (
        <div className={styles['dropdown-menu']}>
          {options.map((element) => (
            <DropDownItem
              path={element.path}
              title={element.title}
              onClick={handleMenu}
              key={element.path}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

DropDownMenu.defaultProps = {
  title: '',
  className: '',
}

export default DropDownMenu
