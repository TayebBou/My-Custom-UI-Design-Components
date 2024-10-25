import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModalSample from "./ModalSample";

describe("ModalSample component", () => {
  test("when user click on the modal button the modal appear", () => {
    // Arrange
    render(<ModalSample />);
    const modalButton = screen.getByAltText("modal icon");
    // Act
    fireEvent.click(modalButton);
    // Assert
    const text = screen.getByText("This is a sample modal", { exact: false });
    expect(text).toBeInTheDocument();
  });
  test("when user click on the close button the modal disappear", async () => {
    // Arrange
    render(<ModalSample />);
    const modalButton = screen.getByAltText("modal icon");
    // Act
    fireEvent.click(modalButton);
    const text = screen.getByText("This is a sample modal", { exact: false });
    const closeButton = screen.getByAltText("close icon");
    fireEvent.click(closeButton);
    // Assert
    await waitFor(() => {
      expect(text).not.toBeInTheDocument();
    });
  });
});
