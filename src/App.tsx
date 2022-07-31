import { FC } from 'react'
import styles from './App.module.css'
import BigImageSlider from './components/organismes/BigImageSlider/BigImageSlider'
import ImageSlider from './components/organismes/ImageSlider/ImageSlider'
import data from './server/data.json'
import { IPhoto } from './shared/types/photo.model'
import NavBarSample from './components/organismes/NavBarSample/NavBarSample'

const App: FC = () => {
  return (
    <>
      <NavBarSample/>
      <div className={styles.app}>
        <ImageSlider photos={data.photos as IPhoto[]} />
      </div>
    </>
  )
}

export default App
