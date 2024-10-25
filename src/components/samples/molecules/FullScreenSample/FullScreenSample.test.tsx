import { fireEvent, render, screen } from "@testing-library/react";
import FullScreenSample from "./FullScreenSample";

describe("FullScreenSample component", () => {
  test("when user clicks on fullscreen button, the requestFullscreen method for the document is called", () => {
    // Mock
    const mockRequestFullscreen = jest.fn();
    const mockExitFullscreen = jest.fn();
    // Mock the Fullscreen API
    Object.defineProperty(document, "exitFullscreen", {
      writable: true,
      value: mockExitFullscreen,
    });
    HTMLElement.prototype.requestFullscreen = mockRequestFullscreen;
    // Arrange
    render(<FullScreenSample />);
    const fullScreenButton = screen.getByRole("button");
    // Act
    fireEvent.click(fullScreenButton);
    // Assert
    expect(mockRequestFullscreen).toHaveBeenCalled();
  });

  test("when user clicks again on fullscreen button, the exitFullscreen method for the document is called", () => {
    // Arrange
    render(<FullScreenSample />);
    const fullScreenButton = screen.getByRole("button");
    document.exitFullscreen = jest.fn();
    // Mock document.fullscreenElement to simulate full screen mode
    Object.defineProperty(document, "fullscreenElement", {
      writable: true,
      value: true, // Simulate fullscreen mode being active
    });
    // Act
    fireEvent.click(fullScreenButton);
    // Assert
    expect(document.exitFullscreen).toHaveBeenCalled();
  });
});
