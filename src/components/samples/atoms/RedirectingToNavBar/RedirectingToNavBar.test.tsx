import { render, screen } from "@testing-library/react";
import RedirectingToNavBar from "./RedirectingToNavBar";

describe("RedirectingToNavBar component", () => {
  test("An up arrow icon is rendered in the dom", () => {
    // Arrange
    render(<RedirectingToNavBar />);
    const upArrow = screen.getByAltText("up arrow");
    // Assert
    expect(upArrow).toBeInTheDocument();
  });
  test("A text redirecting to navBar is rendered in the dom", () => {
    // Arrange
    render(<RedirectingToNavBar />);
    const text = screen.getByText("Here is a navBar Sample");
    // Assert
    expect(text).toBeInTheDocument();
  });
});
