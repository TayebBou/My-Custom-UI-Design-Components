import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders logo', () => {
    // Arrange
    render(<App />);
    const logo = screen.getByAltText('logo')
    // Assert
    expect(logo).toBeInTheDocument()
  });
})

