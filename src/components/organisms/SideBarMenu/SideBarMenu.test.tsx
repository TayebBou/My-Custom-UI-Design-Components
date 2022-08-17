import { fireEvent, render, screen } from '@testing-library/react'
import SideBarMenu from './SideBarMenu'
import bigImageSlider from '../../../assets/images/bigImageSlider.png'
import organism from '../../../assets/images/organism.png'
import { BrowserRouter as Router } from 'react-router-dom'

describe('SideBarMenu component', () => {
  const options = [
    {
      path: '/organisms/BigImageSlider',
      title: 'BigImageSlider',
      src: bigImageSlider,
      alt: 'Big Image Slider',
    },
  ]
  beforeEach(() => {
    // Arrange
    render(
      <Router>
        <SideBarMenu
          onClose={() => {}}
          options={options}
          title="UI Organisms"
          src={organism}
          alt="organism"
        />
      </Router>,
    )
  })

  test('when user click on the sideBarMenu the options are invoked in the document', () => {
    let option = screen.queryByText('BigImageSlider')
    expect(option).not.toBeInTheDocument()
    const menuButton = screen.getByRole('button')
    // Act
    fireEvent.click(menuButton)
    // Assert
    option = screen.queryByText('BigImageSlider')
    expect(option).toBeInTheDocument()
  })
  
  test("sideBarMenu component should contains image in the big menu if it's rendered with valid src prop", () => {
    const sideBarMenuImage = screen.getByAltText('organism')
    // Assert
    expect(sideBarMenuImage).toBeInTheDocument()
  })
})

export {}
