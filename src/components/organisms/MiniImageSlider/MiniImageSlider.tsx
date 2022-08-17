import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { IPhoto } from '../../../shared/types/photo.model'
import Button from '../../atoms/Button/Button'
import styles from './MiniImageSlider.module.css'

type MiniImageSliderProps = {
  photos: IPhoto[]
  imgIndex: number
  handleRight: Function
  handleLeft: Function
}

const MiniImageSlider: FC<MiniImageSliderProps> = (props) => {
  const photos = props.photos[0].photos
  const miniImages: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [newStyle, SetNewStyle] = useState('0')
  const [x, setX] = useState(0)

  // handling screen size when change
  const handleResize = useCallback(() => {
    const element = miniImages.current as HTMLDivElement
    const miniImageWidth = element.offsetWidth
    // two mini images only when mini images div is between 306 px and 391 px
    if (miniImageWidth < 391 && miniImageWidth > 305) {
      SetNewStyle('calc(25% - 46px)')
      setX(Math.floor(props.imgIndex / 2) * -miniImageWidth)
      // one mini image only when mini images is under or equal 305 px
    } else if (miniImageWidth <= 305) {
      SetNewStyle('calc(50% - 46px)')
      setX(props.imgIndex * -miniImageWidth)
      // three mini images only when mini images div is equal or over 391ox
    } else {
      setX(Math.floor(props.imgIndex / 3) * -miniImageWidth)
      SetNewStyle('calc(16.66% - 46px)')
    }
  }, [props.imgIndex])

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <div className={styles['mini-images']}>
      <Button
        disabled={props.imgIndex === 0}
        className={styles['slider-button']}
        onClick={() => {
          props.handleLeft()
        }}
      >
        {'<'}
      </Button>
      <div className={styles.images} ref={miniImages}>
        {photos.map((p, i) => (
          <img
            key={p.url_vignette}
            src={p.url_vignette}
            alt="car outside vignette"
            style={{
              maxWidth: '100%',
              margin: `1.5em ${newStyle}`,
              outline: i === props.imgIndex ? 'solid 0.2em white' : '',
              transition: 'transform 0.5s',
              transform: `translateX(${x}px)`,
            }}
          />
        ))}
      </div>
      <Button
        disabled={props.imgIndex === photos.length - 1}
        className={styles['slider-button']}
        onClick={() => {
          props.handleRight()
        }}
      >
        {'>'}
      </Button>
    </div>
  )
}

export default MiniImageSlider
