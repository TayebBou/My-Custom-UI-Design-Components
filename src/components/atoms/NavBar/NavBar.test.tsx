import { render } from "@testing-library/react";
import NavBar from "./NavBar";

const props = {
  fixed: true,
  className: "NavBar__test",
};

describe("NavBar component", () => {
  test("should render correctly with props", () => {
    // Arrange
    const { asFragment } = render(<NavBar {...props}>test</NavBar>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render correctly without props", () => {
    // Arrange
    const { asFragment } = render(<NavBar>test</NavBar>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
