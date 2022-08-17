import { render, screen } from '@testing-library/react'
import LogoSample from './LogoSample'
import { BrowserRouter as Router } from 'react-router-dom'

describe('LogoSample component', () => {
  beforeEach(() => {
    // Arrange
    render(
      <Router>
        <LogoSample />
      </Router>,
    )
  })
  test('A logo icon is rendered in the dom', () => {
    const logoIcon = screen.getByAltText('logo')
    // Assert
    expect(logoIcon).toBeInTheDocument()
  })
  test('A logo text is rendered in the dom', () => {
    const logoText = screen.getByText('UI Design Components')
    // Assert
    expect(logoText).toBeInTheDocument()
  })
})

export {}
