import { screen, render, fireEvent } from '@testing-library/react'
import DropDownItem from './DropDownItem'
import { BrowserRouter as Router } from 'react-router-dom'

describe('DropDownItem component', () => {
    beforeAll(() =>{
        render(<Router><DropDownItem title="BigImageSlider" path="/organismes/BigImageSlider" /></Router>)
    })
  test('when user click on the DropDownItem', () => {
    
    // Act
    const DropDownItem = screen.getByRole('link')
    DropDownItem.onclick = jest.fn()
    fireEvent.click(DropDownItem)
    // Assert
    expect(DropDownItem.onclick).toHaveBeenCalled()
  })
})

export {}
