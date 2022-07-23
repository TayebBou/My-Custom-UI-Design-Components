import { screen, render, fireEvent } from '@testing-library/react'
import FullScreen from './FullScreen'

describe('FullScreen component', () => {
  beforeEach(() => {
    // Arrange
    ;(document as any).exitFullscreen = jest.fn()
  })

  test('when user click on fullscreen button without a given html element', async () => {
    // Arrange
    render(<FullScreen  />)
    const fullScreenButton = await screen.findByRole('button')

    ;(document.firstElementChild as Element).requestFullscreen = jest.fn()
    
    // Act
    fireEvent.click(fullScreenButton)

    // Assert
    expect((document.firstElementChild as Element).requestFullscreen).toHaveBeenCalled()
    ;(document as any).fullscreenElement = true

    fireEvent.click(fullScreenButton)

    expect(document.exitFullscreen).toHaveBeenCalled()
  })

  test('when user click on fullscreen button with a given html element', async () => {
    // Arrange
    const givenHtmlElement = document.createElement('div')
    render(<FullScreen element={givenHtmlElement}  />)
    const fullScreenButton = await screen.findByRole('button')

    givenHtmlElement.requestFullscreen = jest.fn()
    
    ;(document as any).fullscreenElement = false
    // Act
    fireEvent.click(fullScreenButton)

    // Assert
    expect(givenHtmlElement.requestFullscreen).toHaveBeenCalled()
    ;(document as any).fullscreenElement = true

    fireEvent.click(fullScreenButton)

    expect(document.exitFullscreen).toHaveBeenCalled()
  })
})

export {}
