import {
  screen,
  render,
  fireEvent,
  waitFor,
  within,
  act,
} from '@testing-library/react'
import data from '../../../server/data.json'
import { IPhoto } from '../../../shared/types/photo.model'
import ImageSlider from '../ImageSlider/ImageSlider'

describe('MiniImageSlider component', () => {
  let miniImagesDiv: HTMLDivElement
  let ImagesDiv: HTMLDivElement
  let miniImages: HTMLElement[]
  let RightButton: HTMLElement

  beforeEach(async () => {
    // Arrange
    render(<ImageSlider photos={data.photos as IPhoto[]} />)
    miniImages = await screen.findAllByAltText('car outside vignette', {
      exact: true,
    })
    miniImagesDiv = (miniImages[0] as HTMLElement).closest(
      'div',
    ) as HTMLDivElement
    ImagesDiv = miniImagesDiv.parentElement as HTMLDivElement
    RightButton = within(ImagesDiv).getByText('>', { exact: true })
    Object.defineProperty(miniImagesDiv, 'offsetWidth', {
      writable: true,
    })
  })

  test('when user click on right button the next image is outlined', async () => {
    expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` })

    // Click on right Button of miniImageSlider
    fireEvent.click(RightButton)

    await waitFor(() => {
      expect(miniImages[1]).toHaveStyle({ outline: `solid 0.2em white` })
    })
  })
  test('when user click on left button the previous image is outlined', async () => {
    expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` })

    // slide two times and back one time
    fireEvent.click(RightButton)
    const LeftButton = within(ImagesDiv).getByText('<', { exact: true })
    fireEvent.click(LeftButton)

    await waitFor(() => {
      expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` })
    })
  })
  test('when size of mini images div is under or equal 305px there is only one image visible', async () => {
    // Arrange
    ;(miniImagesDiv as any).offsetWidth = 200

    // Act
    fireEvent.click(RightButton)

    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(-200px)` })
  })
  test('when size of mini images div is greater than 305px and under 391 there is two images visible', async () => {
    // Arrange
    ;(miniImagesDiv as any).offsetWidth = 306

    // Act
    fireEvent.click(RightButton)
    fireEvent.click(RightButton)

    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(-306px)` })
  })
  test('when size of mini images div is greater than or equal 391 there is three images visible', async () => {
    ;(miniImagesDiv as any).offsetWidth = 391

    act(() => {
      /* fire events that update state */
      global.dispatchEvent(new Event('resize'))
    })

    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(0px)` })
  })
})

export {}
