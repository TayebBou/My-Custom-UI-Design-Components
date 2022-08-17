import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import BigImageSlider from './BigImageSlider'
import data from '../../../server/data.json'
import { IPhoto } from '../../../shared/types/photo.model'

describe('BigImageSlider component', () => {
  beforeEach(() => {
    // Arrange
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
})

export {}
