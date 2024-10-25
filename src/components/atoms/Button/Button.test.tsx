import { screen, render, fireEvent } from "@testing-library/react";
import Button, { ButtonTypes } from "./Button";

const props = {
  onClick: jest.fn(),
  className: "Button__test",
  type: ButtonTypes.BUTTON,
  disabled: true,
};

describe("Button component", () => {
  test("should render correctly with props", () => {
    // Arrange
    const { asFragment } = render(<Button {...props}>Click Me</Button>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render correctly without props", () => {
    // Arrange
    const { asFragment } = render(<Button>Default Button</Button>);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  test("when user click on the Button", () => {
    // Arrange
    render(<Button>test</Button>);
    const button = screen.getByRole("button");
    // Act
    button.onclick = jest.fn();
    fireEvent.click(button);
    // Assert
    expect(button.onclick).toHaveBeenCalled();
  });
});
