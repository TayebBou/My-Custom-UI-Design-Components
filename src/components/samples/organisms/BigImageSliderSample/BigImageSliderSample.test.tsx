import { render } from "@testing-library/react";
import BigImageSliderSample from "./BigImageSliderSample";

describe("BigImageSliderSample component", () => {
  test("should render correctly", () => {
    // Arrange
    const { container } = render(<BigImageSliderSample />);
    // Assert
    expect(container).toMatchSnapshot();
  });
});
