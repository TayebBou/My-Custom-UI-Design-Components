import { render, screen } from "@testing-library/react";
import ButtonSample from "./ButtonSample";

describe("ButtonSample component", () => {
  test("a button is rendered in the dom", () => {
    // Arrange
    render(<ButtonSample />);
    const button = screen.getByRole("button");
    // Assert
    expect(button).toBeInTheDocument();
  });
});
