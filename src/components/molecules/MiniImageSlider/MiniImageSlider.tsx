import { FC } from 'react'
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

  return (
    <div className={styles['mini-images']}>
      {photos.map((p, i) => (
        <img
          key={p.url_vignette}
          src={p.url_vignette}
          alt="car outside vignette"
          style={{
            maxWidth: '100%',
            border: i === props.imgIndex ? 'solid 0.2em white' : '',
          }}
        />
      ))}
      <Button
        disabled={props.imgIndex === (photos.length - 1)}
        className={`${styles['slider-button']} ${styles.right}`}
        onClick={() => props.handleRight()}
      >
        {'>'}
      </Button>
      <Button
        disabled={props.imgIndex === 0}
        className={`${styles['slider-button']} ${styles.left}`}
        onClick={() => props.handleLeft()}
      >
        {'<'}
      </Button>
    </div>
  )
}

export default MiniImageSlider
