import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import data from "../../../assets/data/data.json";
import BigImageSlider from "./BigImageSlider";

const props = {
  photos: data.photos,
};

describe("BigImageSlider component", () => {
  test("should render correctly with props", () => {
    // Arrange
    const { asFragment } = render(<BigImageSlider {...props} />);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test("when user click on right button the slide go to the next image", async () => {
    // Arrange
    render(<BigImageSlider {...props} />);
    const BigImages = await screen.findAllByAltText("car outside", {
      exact: true,
    });
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` });
    // Right Button of Big Image Slider
    const RightButton = screen.getByText(">", { exact: true });
    // Act
    fireEvent.click(RightButton);
    // Assert
    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` });
    });
  });
  test("when user click on left button the slide go back to the previous image", async () => {
    // Arrange
    render(<BigImageSlider {...props} />);
    const BigImages = await screen.findAllByAltText("car outside", {
      exact: true,
    });
    expect(BigImages[0]).toHaveStyle({ transform: `translateX(0%)` });
    // slide two times and back one time
    const RightButton = screen.getByText(">", { exact: true });
    // Act
    fireEvent.click(RightButton);
    fireEvent.click(RightButton);
    const LeftButton = screen.getByText("<", { exact: true });
    fireEvent.click(LeftButton);
    // Assert
    await waitFor(() => {
      expect(BigImages[0]).toHaveStyle({ transform: `translateX(-100%)` });
    });
  });
});
