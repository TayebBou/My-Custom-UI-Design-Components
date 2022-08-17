import { render, screen } from '@testing-library/react'
import RedirectingToNavBar from './RedirectingToNavBar'

describe('RedirectingToNavBar component', () => {
  beforeEach(() => {
    // Arrange
    render(<RedirectingToNavBar />)
  })
  test('An up arrow icon is rendered in the dom', () => {
    const upArrow = screen.getByAltText('up arrow')
    // Assert
    expect(upArrow).toBeInTheDocument()
  })
  test('A text redirecting to navBar is rendered in the dom', () => {
    const text = screen.getByText('Here is a navBar Sample')
    // Assert
    expect(text).toBeInTheDocument()
  })
})

export {}
