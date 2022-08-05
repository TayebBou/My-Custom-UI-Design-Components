import { screen, render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button component', () => {
    beforeAll(() =>{
        render(<Button>test</Button>)
    })
  test('when user click on the Button', () => {
    
    // Act
    const Button = screen.getByRole('button')
    Button.onclick = jest.fn()
    fireEvent.click(Button)
    // Assert
    expect(Button.onclick).toHaveBeenCalled()
  })
})

export {}
