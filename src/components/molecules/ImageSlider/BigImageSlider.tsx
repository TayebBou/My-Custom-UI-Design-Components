import { FC, useState } from "react";
import { IPhoto } from '../../../shared/types/photo.model';
import styles from './BigImageSlider.module.css'

type SliderProps = {
    photos: IPhoto[]
}

const BigImageSlider:FC<SliderProps> = (props) => {

    const photos = props.photos[0].photos;

    const [x, setX] = useState(0)

    const handleRight = () => {
        if(x !== (-100 * (photos.length-1))){
            setX(x => x - 100)
        }
    }

    const handleLeft = () => {
        if(x !== 0){
            setX(x => x + 100)
        }
    }

    return (
        <div className={styles["full-images"]}>
            {photos.map((p) => (
              <img key={p.url_full} src={p.url_full} alt="car outside" style={{ maxWidth: "100%", transition: '0.5s', transform: `translateX(${x}%)`}} />
            ))}
            <button disabled={x === (-100 * (photos.length-1))} className={`${styles["slider-button"]} ${styles.right}`} onClick={handleRight}>{'>'}</button>
            <button disabled={x === 0} className={`${styles["slider-button"]} ${styles.left}`} onClick={handleLeft}>{'<'}</button>
          </div>
    )
}

export default BigImageSlider