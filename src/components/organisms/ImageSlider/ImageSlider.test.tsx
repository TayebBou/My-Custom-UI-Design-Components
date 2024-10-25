import {
  screen,
  render,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import data from "../../../assets/data/data.json";

describe("ImageSlider component", () => {
  test("when user click on right button the slide go to the next image", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const BigImages = await screen.findAllByAltText("full-size", {
      exact: true,
    });
    const bigImagesDiv = screen.getByTestId("bigImagesDiv");
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` });
    // Right Button of Big Image Slider
    const RightButton = within(bigImagesDiv).getByText(">", { exact: true });
    // Act
    fireEvent.click(RightButton);
    // Assert
    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` });
    });
  });

  test("when user click on left button the slide go back to the previous image", async () => {
    // Arrange
    render(<ImageSlider photos={data.photos} />);
    const BigImages = await screen.findAllByAltText("full-size", {
      exact: true,
    });
    const bigImagesDiv = screen.getByTestId("bigImagesDiv");
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` });
    // Act : slide two times and back one time
    const RightButton = within(bigImagesDiv).getByText(">", { exact: true });
    fireEvent.click(RightButton);
    fireEvent.click(RightButton);
    const LeftButton = within(bigImagesDiv).getByText("<", { exact: true });
    fireEvent.click(LeftButton);
    // Assert
    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` });
    });
  });
});
