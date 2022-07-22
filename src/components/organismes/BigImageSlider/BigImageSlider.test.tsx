import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import BigImageSlider from './BigImageSlider'
import data from '../../../server/data.json'
import { IPhoto } from '../../../shared/types/photo.model'

describe('BigImageSlider component', () => {
  beforeEach(() => {
    // Arrange
    ;(document as any).requestFullscreen = jest.fn()
    ;(document as any).exitFullscreen = jest.fn()
    ;(document as any).fullscreenEnabled = jest.fn()
    ;(document as any).fullscreenchange = jest.fn()
    ;(document as any).fullscreenerror = jest.fn()
    render(<BigImageSlider photos={data.photos as IPhoto[]} />)
  })

  test('when user click on right button the slide go to the next image', async () => {
    const BigImages = await screen.findAllByAltText('car outside', {
      exact: true,
    })
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` })

    // Right Button of Big Image Slider
    const RightButton = screen.getByText('>', { exact: true })
    fireEvent.click(RightButton)

    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` })
    })
  })
  test('when user click on left button the slide go back to the previous image', async () => {
    const BigImages = await screen.findAllByAltText('car outside', {
      exact: true,
    })
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` })

    // slide two times and back one time
    const RightButton = screen.getByText('>', { exact: true })
    fireEvent.click(RightButton)
    fireEvent.click(RightButton)
    const LeftButton = screen.getByText('<', { exact: true })
    fireEvent.click(LeftButton)

    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` })
    })
  })

  test('when user click on fullscreen button the slider is on fullscreen mode', async () => {
    const fullScreenButton = await screen.findByAltText('full screen')
    const divImages = (fullScreenButton.closest('div') as HTMLDivElement)
      .parentElement as HTMLDivElement

    divImages.requestFullscreen = jest.fn()
    fireEvent.click(fullScreenButton)

    expect(divImages.requestFullscreen).toHaveBeenCalled()
    ;(document as any).fullscreenElement = true

    fireEvent.click(fullScreenButton)

    expect(document.exitFullscreen).toHaveBeenCalled()
  })
})

export {}
