import { screen, render, fireEvent } from "@testing-library/react";
import FullScreen from "./FullScreen";

const givenHtmlElement = document.createElement("div");
givenHtmlElement.requestFullscreen = jest.fn();

const props = {
  element: givenHtmlElement,
  className: "FullScreen__button",
};

describe("FullScreen component", () => {
  beforeEach(() => {
    // Mock requestFullscreen method on HTMLDivElement and document.documentElement
    const requestFullscreenMock = jest.fn(() => Promise.resolve());

    // Mock requestFullscreen on document.documentElement
    Object.defineProperty(document.documentElement, "requestFullscreen", {
      value: requestFullscreenMock,
      writable: true,
    });

    // Mock exitFullscreen method explicitly on document
    document.exitFullscreen = jest.fn(() => Promise.resolve());
  });

  afterEach(() => {
    // Cleanup mocks after each test
    jest.clearAllMocks();
  });

  test("should render correctly with props", () => {
    const { asFragment } = render(<FullScreen {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should render correctly without props", () => {
    const { asFragment } = render(<FullScreen />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("when user clicks fullscreen button without a given HTML element", async () => {
    // Arrange
    render(<FullScreen />);
    const fullScreenButton = await screen.findByRole("button");
    // Act: First click to enter fullscreen
    fireEvent.click(fullScreenButton);
    // Assert: Check if requestFullscreen was called on document.documentElement
    expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
    // Simulate entering fullscreen
    Object.defineProperty(document, "fullscreenElement", {
      configurable: true,
      get: jest.fn(() => document.documentElement), // Now in fullscreen
    });
    // Act: Second click to exit fullscreen
    fireEvent.click(fullScreenButton);
    // Assert: Check if exitFullscreen was called
    expect(document.exitFullscreen).toHaveBeenCalled();
  });

  test("when user clicks fullscreen button with a given HTML element", async () => {
    render(<FullScreen {...props} />);
    const fullScreenButton = await screen.findByRole("button");
    // Act: First click to enter fullscreen
    fireEvent.click(fullScreenButton);
    // Assert that requestFullscreen was called on the given element
    expect(givenHtmlElement.requestFullscreen).toHaveBeenCalled();
    // Simulate entering fullscreen
    Object.defineProperty(document, "fullscreenElement", {
      configurable: true,
      get: jest.fn(() => givenHtmlElement), // Now in fullscreen
    });
    // Act: Second click to exit fullscreen
    fireEvent.click(fullScreenButton);
    // Assert that exitFullscreen was called
    expect(document.exitFullscreen).toHaveBeenCalled();
  });
});
