import { FC } from 'react'
import styles from './App.module.css'
import NavBarSample from './components/samples/organisms/NavBarSample/NavBarSample'
import AppRoutes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

const App: FC = () => {
  return (
    <Router>
      <NavBarSample />
      <div className={styles.app}>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
