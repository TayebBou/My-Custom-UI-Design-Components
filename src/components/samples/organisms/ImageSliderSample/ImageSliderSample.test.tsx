import { render } from "@testing-library/react";
import ImageSliderSample from "./ImageSliderSample";

describe("ImageSliderSample component", () => {
  test("should render correctly", () => {
    // Arrange
    const { container } = render(<ImageSliderSample />);
    // Assert
    expect(container).toMatchSnapshot();
  });
});
