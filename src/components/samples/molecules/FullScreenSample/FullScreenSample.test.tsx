import { fireEvent, render, screen } from '@testing-library/react'
import FullScreenSample from './FullScreenSample'

describe('FullScreenSample component', () => {
  let fullScreenButton: HTMLButtonElement
  beforeEach(() => {
    // Arrange
    render(<FullScreenSample />)
    fullScreenButton = screen.getByRole('button')
    ;(document as any).exitFullscreen = jest.fn()
  })
  test('when user click on fullscreen button the requestFullscreen method for the document is called', () => {
    ;(document.firstElementChild as Element).requestFullscreen = jest.fn()
    
    // Act
    fireEvent.click(fullScreenButton)

    // Assert
    expect(
      (document.firstElementChild as Element).requestFullscreen,
    ).toHaveBeenCalled()
  })
  test('when user click again on fullscreen button the exitFullscreen method for the document is called', () => {
    ;(document as any).fullscreenElement = true

    fireEvent.click(fullScreenButton)

    expect(document.exitFullscreen).toHaveBeenCalled()
  })
})

export {}
