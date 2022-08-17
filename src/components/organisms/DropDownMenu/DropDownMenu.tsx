import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import expand from '../../../assets/images/expand.png'
import collapse from '../../../assets/images/next.png'
import styles from './DropDownMenu.module.css'
import DropDownItem from '../../molecules/DropDownItem/DropDownItem'

type DropDownMenuProps = {
  options: { path: string; title: string; src?: string; alt?: string }[]
  title: string
  className?: string
  onClick?: (display: boolean) => void
}

const DropDownMenu: FC<DropDownMenuProps> = (props) => {
  const { options, title, className, onClick } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const [isNavMenuExiting, setIsNavMenuExiting] = useState(false)

  const exitMenu = useCallback(() => {
    setIsNavMenuExiting(true)
    onClick?.(false)
    timeout.current = setTimeout(() => {
      setIsNavMenuExiting(false)
      setIsExpanded(false)
    }, 150)
  }, [onClick])

  const handleMenu = useCallback(() => {
    if (isExpanded) {
      exitMenu()
    } else {
      setIsExpanded(true)
      onClick?.(true)
    }
  }, [onClick, isExpanded, exitMenu])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        exitMenu()
      }
    },
    [exitMenu],
  )

  useEffect(() => {
    if (isExpanded) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current)
      }
    }
  }, [isExpanded, handleClickOutside])

  return (
    <div ref={wrapperRef} className={styles['parent-div']}>
      <Button className={styles.menu + ' ' + className} onClick={handleMenu}>
        <Icon
          className={styles.icon}
          src={isExpanded ? expand : collapse}
          alt={isExpanded ? 'expand' : 'collapse'}
          size="32px"
        />
        <h1 className={styles.h1}>{title}</h1>
      </Button>
      {isExpanded && (
        <div
          className={
            styles['dropdown-menu'] + ' ' + (isNavMenuExiting ? styles.out : '')
          }
        >
          {options.map((element) => (
            <DropDownItem
              path={element.path}
              title={element.title}
              onClick={exitMenu}
              key={element.path}
              className={styles['dropdown-item']}
            />
          ))}
        </div>
      )}
    </div>
  )
}

DropDownMenu.defaultProps = {
  title: '',
  className: '',
}

export default DropDownMenu
