import { render } from "@testing-library/react";
import LogoSample from "./LogoSample";
import { BrowserRouter as Router } from "react-router-dom";

describe("LogoSample component", () => {
  test("should render correctly", () => {
    // Arrange
    const { asFragment } = render(
      <Router>
        <LogoSample />
      </Router>
    );
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
