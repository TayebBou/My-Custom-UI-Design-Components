// @ts-nocheck

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SideBar from "./SideBar";

const onClose = jest.fn();

describe("SideBar component", () => {
  beforeEach(() => {
    onClose.mockClear();
  });
  test("should render correctly with props", () => {
    // Arrange
    const { container } = render(
      <SideBar onClose={onClose} closeSideBar={true}>
        children
      </SideBar>
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("should render correctly without props", () => {
    // Arrange
    const { container } = render(<SideBar />);
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("when user click on close button the onClose function is invoked", async () => {
    // Arrange
    render(<SideBar onClose={onClose}>children</SideBar>);
    const closeButton = screen.getByRole("button");
    // Act
    fireEvent.click(closeButton);
    // Assert
    // the onClose function is executed after 0.5s ( time for cancel animation )
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
  // to close the sideBar dynamically we use the closeSideBar props
  test("when user render sideBar with closeSideBar prop at true the onClose function is invoked", async () => {
    // Arrange
    render(
      <SideBar onClose={onClose} closeSideBar={true}>
        children
      </SideBar>
    );
    // Assert
    // the onClose function is executed after 0.5s ( time for cancel animation )
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
