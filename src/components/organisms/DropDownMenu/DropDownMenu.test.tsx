import { screen, render, fireEvent } from '@testing-library/react'
import DropDownMenu from './DropDownMenu'
import { BrowserRouter as Router } from 'react-router-dom'

describe('DropDownMenu component', () => {
    const options = [
        {
          path: '/organisms/BigImageSlider',
          title: 'BigImageSlider',
        },
        {
          path: '/organisms/ImageSlider',
          title: 'ImageSlider',
        },
      ]
    beforeEach(() =>{
        render(<Router><DropDownMenu title="UI Organisms" options={options} /></Router>)
    })
  test('when user click on the DropDownMenu a menu with all options appear in UI', () => {
    
    // Act
    let links = screen.queryAllByRole('link')
    expect(links.length).toBe(0)
    const DropDownMenu = screen.getByRole('button')
    fireEvent.click(DropDownMenu)
    links = screen.queryAllByRole('link')
    // Assert
    expect(links.length).toBe(2)
    expect(links[0]).toBeInTheDocument()
  })
  test('when user click everywhere the options disappear', () => {
    
    const DropDownMenu = screen.getByRole('button')
    let links = screen.queryAllByRole('link')
    // Act
    fireEvent.click(DropDownMenu)
    fireEvent.mouseDown(document.body)
    links = screen.queryAllByRole('link')
    // Assert
    expect(links.length).toBe(0)
  })
})

export {}
