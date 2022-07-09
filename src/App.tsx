import { FC } from 'react';
import styles from './App.module.css';
import BigImageSlider from './components/molecules/ImageSlider/BigImageSlider';
import data from './server/data.json'
import { IPhoto } from './shared/types/photo.model';

const App:FC = () => {
  return (
    <div className={styles.app}>
      <BigImageSlider photos={data.photos as IPhoto[]} />
    </div>
  );
}

export default App;
