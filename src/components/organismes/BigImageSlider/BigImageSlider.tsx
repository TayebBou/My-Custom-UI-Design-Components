import { FC, useRef, useState } from 'react'
import { IPhoto } from '../../../shared/types/photo.model'
import Button from '../../atoms/Button/Button'
import FullScreen from '../../molecules/FullScreen/FullScreen'
import styles from './BigImageSlider.module.css'

type SliderProps = {
  photos: IPhoto[]
}

const BigImageSlider: FC<SliderProps> = (props) => {
  const photos = props.photos[0].photos

  const [x, setX] = useState(0)
  const images: React.LegacyRef<HTMLDivElement> = useRef(null)

  const handleRight = () => {
    if (x !== -100 * (photos.length - 1)) {
      setX((x) => x - 100)
    }
  }

  const handleLeft = () => {
    if (x !== 0) {
      setX((x) => x + 100)
    }
  }

  const openFullScreen = () => {
    const element = images.current

    if (element) {
      if (!document.fullscreenElement) {
        element.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    }
  }

  return (
    <div ref={images} className={styles.fullscreen}>
      <div className={styles['full-images']}>
        {photos.map((p) => (
          <img
            key={p.url_full}
            src={p.url_full}
            alt="car outside"
            style={{
              maxWidth: '100%',
              transition: '0.5s',
              transform: `translateX(${x}%)`,
            }}
          />
        ))}
        <Button
          disabled={x === -100 * (photos.length - 1)}
          className={`${styles['slider-button']} ${styles.right}`}
          onClick={handleRight}
        >
          {'>'}
        </Button>
        <Button
          disabled={x === 0}
          className={`${styles['slider-button']} ${styles.left}`}
          onClick={handleLeft}
        >
          {'<'}
        </Button>
        <span className={styles.span}>
          {Math.abs(x / 100) + 1} / {photos.length}
        </span>
        <FullScreen onClick={openFullScreen} />
      </div>
    </div>
  )
}

export default BigImageSlider
