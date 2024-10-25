import { fireEvent, screen } from "@testing-library/react";
import SideBarSample from "./SideBarSample";
import { renderWithProviders } from "../../../../utils/test-utils";
import store from "../../../../config/store";

describe("SideBarSample component", () => {
  test("should render correctly", () => {
    // Arrange
    const { container } = renderWithProviders(<SideBarSample />);
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("when user click on the hamburger button the sideBar is invoked in the document", () => {
    // Arrange
    renderWithProviders(<SideBarSample />);
    const hamburgerButton = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburgerButton);
    // Assert
    expect(store.getState().navBar.displaySide).toBeTruthy();
  });
});
