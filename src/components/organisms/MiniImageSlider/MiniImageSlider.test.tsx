import {
  screen,
  render,
  fireEvent,
  waitFor,
  within,
  act,
} from "@testing-library/react";
import data from "../../../assets/data/data.json";
import ImageSlider from "../ImageSlider/ImageSlider";

describe("MiniImageSlider component", () => {
  test("when user click on right button the next image is outlined", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const miniImages = await screen.findAllByAltText("car outside vignette", {
      exact: true,
    });
    expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` });
    const imagesDiv = screen.getByTestId("imagesDiv");
    const rightButton = within(imagesDiv).getByText(">", { exact: true });
    // Act: Click on right Button of miniImageSlider
    fireEvent.click(rightButton);
    // Assert
    await waitFor(() => {
      expect(miniImages[1]).toHaveStyle({ outline: `solid 0.2em white` });
    });
  });
  test("when user click on left button the previous image is outlined", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const miniImages = await screen.findAllByAltText("car outside vignette", {
      exact: true,
    });
    expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` });
    const imagesDiv = screen.getByTestId("imagesDiv");
    const rightButton = within(imagesDiv).getByText(">", { exact: true });
    // Act: slide two times and back one time
    fireEvent.click(rightButton);
    const LeftButton = within(imagesDiv).getByText("<", { exact: true });
    fireEvent.click(LeftButton);
    // Assert
    await waitFor(() => {
      expect(miniImages[0]).toHaveStyle({ outline: `solid 0.2em white` });
    });
  });
  test("when size of mini images div is under or equal 305px there is only one image visible", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const miniImages = await screen.findAllByAltText("car outside vignette", {
      exact: true,
    });
    const miniImagesDiv = screen.getByTestId("miniImagesDiv");
    Object.defineProperty(miniImagesDiv, "offsetWidth", {
      configurable: true,
      value: 200,
    });
    const imagesDiv = screen.getByTestId("imagesDiv");
    const rightButton = within(imagesDiv).getByText(">", { exact: true });
    // Act
    fireEvent.click(rightButton);
    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(-200px)` });
  });
  test("when size of mini images div is greater than 305px and under 391 there is two images visible", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const miniImages = await screen.findAllByAltText("car outside vignette", {
      exact: true,
    });
    const miniImagesDiv = screen.getByTestId("miniImagesDiv");
    Object.defineProperty(miniImagesDiv, "offsetWidth", {
      configurable: true,
      value: 306,
    });
    const imagesDiv = screen.getByTestId("imagesDiv");
    const rightButton = within(imagesDiv).getByText(">", { exact: true });
    // Act
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(-306px)` });
  });
  test("when size of mini images div is greater than or equal 391 there is three images visible", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const miniImages = await screen.findAllByAltText("car outside vignette", {
      exact: true,
    });
    const miniImagesDiv = screen.getByTestId("miniImagesDiv");
    Object.defineProperty(miniImagesDiv, "offsetWidth", {
      configurable: true,
      value: 391,
    });
    // Act
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    // Assert
    expect(miniImages[0]).toHaveStyle({ transform: `translateX(0px)` });
  });
});
