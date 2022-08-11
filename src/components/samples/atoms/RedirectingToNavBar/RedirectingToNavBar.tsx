import { FC } from 'react'
import Icon from '../../../atoms/Icon/Icon'
import up from '../../../../assets/images/up.png'

const RedirectingToNavBar: FC = () => {
  return (
    <>
      <Icon src={up} alt="up arrow" size="40px" />
      <h2>Here is a navBar Sample</h2>
    </>
  )
}

export default RedirectingToNavBar
