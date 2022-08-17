import { screen, render } from '@testing-library/react'
import NavBar from './NavBar'

describe('NavBar component', () => {
  test('Navbar is not fixed without the props fixed', async () => {
    // Arrange
    render(<NavBar>test</NavBar>)

    const navBarDivStyle = screen.getByText('test').getAttribute('style')
    // Assert
    expect(navBarDivStyle).toBe(null)
  })

  test('Navbar is fixed with the props fixed', async () => {
    // Arrange
    render(<NavBar fixed>test</NavBar>)

    const navBarDivStyle = screen.getByText('test')
    // Assert
    expect(navBarDivStyle).toHaveStyle({ position: 'fixed' })
  })
})

export {}
