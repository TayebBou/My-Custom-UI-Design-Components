import { screen, render, fireEvent } from '@testing-library/react'
import DropDownItem from './DropDownItem'
import { BrowserRouter as Router } from 'react-router-dom'
import bigImageSlider from '../../../assets/images/bigImageSlider.png'

describe('DropDownItem component', () => {
  test('when user click on the DropDownItem the onClick function is invoked', () => {
    // Arrange
    render(<Router><DropDownItem title="BigImageSlider" path="/organisms/BigImageSlider" /></Router>)
    // Act
    const link = screen.getByRole('link')
    link.onclick = jest.fn()
    fireEvent.click(link)
    // Assert
    expect(link.onclick).toHaveBeenCalled()
  })
  test("DropDownItem component should contains image if it's rendered with valid src prop", () => {
    // Arrange
    render(<Router><DropDownItem title="BigImageSlider" path="/organisms/BigImageSlider" src={bigImageSlider} /></Router>)
    const icon = screen.getByRole('img')
    // Assert
    expect(icon).toBeInTheDocument()
  })
})

export {}
