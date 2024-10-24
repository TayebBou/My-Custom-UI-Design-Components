import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../../utils/test-utils";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import NavBarSample from "./NavBarSample";
import store from "../../../../config/store";

describe("NavBarSample component", () => {
  test("when user click on navBar Menu the options and a black font are invoked in the document", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const navMenu = screen.getByText("UI Atoms");
    // Act
    fireEvent.click(navMenu);
    const blackFont = screen.getByTestId("black-font");
    const navMenuOption = screen.getByText("Icon");
    // Assert
    expect(navMenuOption).toBeInTheDocument();
    expect(blackFont).toBeInTheDocument();
    // set back store isNavMenuExpanded state to false
    fireEvent.click(navMenu);
    await waitFor(() => {
      expect(store.getState().navBar.isNavMenuExpanded).toBeFalsy();
    });
  });
  test("when user click everywhere else the options and the black font are removed from the dom", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const navMenu = screen.getByText("UI Atoms");
    // Act
    fireEvent.click(navMenu);
    const blackFont = screen.getByTestId("black-font");
    fireEvent.mouseDown(document.body);
    const navMenuOption = screen.getByText("Icon");
    // Assert
    expect(blackFont.getAttribute("class")).toBe("black-font out");
    await waitFor(() => {
      expect(blackFont).not.toBeInTheDocument();
    });
    expect(navMenuOption).not.toBeInTheDocument();
    expect(store.getState().navBar.isNavMenuExiting).toBeFalsy();
  });
  test("if window innerwidth is greater than or equal 900px the navMenu is invoked and there is no hamburger button for sideBar", () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const navMenu = screen.getByText("UI Organisms");
    const hamburger = screen.queryByAltText("hamburger icon");

    // Assert
    expect(navMenu).toBeInTheDocument();
    expect(hamburger).not.toBeInTheDocument();
  });
  test("if window innerwidth is under 900px the hamburger button for sideBar is invoked in the DOM and there is no navMenu", () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    window.innerWidth = 899;
    // Act
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    const navMenu = screen.queryByText("UI Organisms");
    const hamburger = screen.getByAltText("hamburger icon");
    // Assert
    expect(navMenu).not.toBeInTheDocument();
    expect(hamburger).toBeInTheDocument();
  });
  test("when user click on hamburger button the sideBar is invoked in the document", () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const hamburger = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburger);
    const sideMenu = screen.getByText("UI Atoms");
    // Assert
    expect(sideMenu).toBeInTheDocument();
  });
  test("when user click on close button the sidebar is removed from the dom", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const hamburger = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburger);
    const closeButton = screen.getByAltText("close icon");
    fireEvent.click(closeButton);
    const sideMenu = screen.queryByText("UI Molecules");
    // Assert
    await waitFor(() => {
      expect(sideMenu).not.toBeInTheDocument();
    });
  });
  test("when user click on an option of the SideBarMenu organism the sidebar is removed from the dom", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const hamburger = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburger);
    const sideMenuO = screen.getByText("UI Organisms");
    fireEvent.click(sideMenuO);
    const linksO = screen.getAllByRole("link")[0];
    fireEvent.click(linksO);
    // Assert
    await waitFor(() => {
      expect(sideMenuO).not.toBeInTheDocument();
    });
  });
  test("when user click on an option of the SideBarMenu molecule the sidebar is removed from the dom", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const hamburger = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburger);
    const sideMenuM = screen.getByText("UI Molecules");
    fireEvent.click(sideMenuM);
    const linksM = screen.getAllByRole("link")[0];
    fireEvent.click(linksM);
    // Assert
    await waitFor(() => {
      expect(sideMenuM).not.toBeInTheDocument();
    });
  });
  test("when user click on an option of the SideBarMenu atom the sidebar is removed from the dom", async () => {
    // Arrange
    renderWithProviders(
      <Router>
        <NavBarSample />
      </Router>
    );
    const hamburger = screen.getByAltText("hamburger icon");
    // Act
    fireEvent.click(hamburger);
    const sideMenuA = screen.getByText("UI Atoms");
    fireEvent.click(sideMenuA);
    const linksA = screen.getAllByRole("link")[0];
    fireEvent.click(linksA);
    // Assert
    await waitFor(() => {
      expect(sideMenuA).not.toBeInTheDocument();
    });
  });
});
