import { render, screen } from '@testing-library/react'
import IconSample from './IconSample'

describe('IconSample component', () => {
    test('An icon is rendered in the dom', () => {
        // Arrange
        render(<IconSample />)
        const icon = screen.getByRole('img')
        // Assert
        expect(icon).toBeInTheDocument()
    })
})

export {}