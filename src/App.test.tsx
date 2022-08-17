import { screen } from '@testing-library/react'
import { renderWithProviders } from './utils/test-utils'
import App from './App'

describe('App component', () => {
  test('renders logo', () => {
    // Arrange
    renderWithProviders(<App />)
    const logo = screen.getByAltText('logo')
    // Assert
    expect(logo).toBeInTheDocument()
  })
})
