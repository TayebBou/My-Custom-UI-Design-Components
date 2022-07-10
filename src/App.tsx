import { FC } from 'react'
import styles from './App.module.css'
import ImageSlider from './components/organismes/ImageSlider/ImageSlider'
import data from './server/data.json'
import { IPhoto } from './shared/types/photo.model'

const App: FC = () => {

  return (
    <div className={styles.app}>
      <ImageSlider photos={data.photos as IPhoto[]} />
    </div>
  )
}

export default App
