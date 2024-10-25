// @ts-nocheck

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Modal from "./Modal";

const clearTimeoutMock = jest.spyOn(global, "clearTimeout");
const onCloseMock = jest.fn();

const props = {
  onDisplay: true,
  onClose: onCloseMock,
  className: "Modal__test",
  title: "Test Modal Title",
};

describe("Modal component", () => {
  test("should render correctly with props", () => {
    // Arrange
    const { container } = render(
      <Modal {...props}>
        <p>This is the modal content.</p>
      </Modal>
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("should render correctly without props", () => {
    // Arrange
    const { container } = render(<Modal />);
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("when user click on the black font the onClose method is called after 0.17s (time for animation)", async () => {
    // Arrange
    render(
      <Modal {...props}>
        <p>This is the modal content.</p>
      </Modal>
    );
    const blackFont = screen.getByTestId("black-font");
    // Act
    fireEvent.click(blackFont);
    // Assert
    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalled();
    });
  });
  test("when user click on the close button the onClose method is called after 0.17s (time for animation)", async () => {
    // when the modal is with onDisplay prop at false there is no timer to clear
    const { rerender } = render(
      <Modal onDisplay={false} onClose={onCloseMock}>
        <p>This is the modal content.</p>
      </Modal>
    );
    expect(clearTimeoutMock).not.toHaveBeenCalled();
    rerender(
      <Modal {...props}>
        <p>This is the modal content.</p>
      </Modal>
    );
    const closeButton = screen.getByAltText("close icon");
    // Act
    fireEvent.click(closeButton);
    expect(clearTimeoutMock).not.toHaveBeenCalled();
    // Assert
    await waitFor(() => {
      expect(onCloseMock).toHaveBeenCalled();
    });
    clearTimeoutMock.mockClear(); // clear the clearTimeoutMock because waitFor is actually invoking a clearTimeout
    // when the modal is with onDisplay prop at false after the closing there is a timer to clear
    rerender(
      <Modal onDisplay={false} onClose={onCloseMock}>
        <p>This is the modal content.</p>
      </Modal>
    );
    expect(clearTimeoutMock).toHaveBeenCalled();
  });
});
