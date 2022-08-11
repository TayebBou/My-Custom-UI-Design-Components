import { screen, render, fireEvent, waitFor, within } from '@testing-library/react'
import ImageSlider from './ImageSlider'
import data from '../../../server/data.json'
import { IPhoto } from '../../../shared/types/photo.model'

describe('ImageSlider component', () => {
  beforeEach(() => {
    // Arrange
    render(<ImageSlider photos={data.photos as IPhoto[]} />)
    
  })

  test('when user click on right button the slide go to the next image', async () => {
    const BigImages = await screen.findAllByAltText('car outside', {
      exact: true,
    })
    const bigImagesDiv = (BigImages[0] as HTMLElement).closest('div') as HTMLDivElement
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` })

    // Right Button of Big Image Slider
    const RightButton = within(bigImagesDiv).getByText('>', { exact: true })
    fireEvent.click(RightButton)

    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` })
    })
  })
  test('when user click on left button the slide go back to the previous image', async () => {
    const BigImages = await screen.findAllByAltText('car outside', {
      exact: true,
    })
    const bigImagesDiv = (BigImages[0] as HTMLElement).closest('div') as HTMLDivElement
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` })

    // slide two times and back one time
    const RightButton = within(bigImagesDiv).getByText('>', { exact: true })
    fireEvent.click(RightButton)
    fireEvent.click(RightButton)
    const LeftButton = within(bigImagesDiv).getByText('<', { exact: true })
    fireEvent.click(LeftButton)

    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` })
    })
  })
})

export {}
