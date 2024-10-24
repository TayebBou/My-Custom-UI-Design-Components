import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import DropDownMenu from "./DropDownMenu";
import { BrowserRouter as Router } from "react-router-dom";

const options = [
  {
    path: "/organisms/BigImageSlider",
    title: "BigImageSlider",
  },
  {
    path: "/organisms/ImageSlider",
    title: "ImageSlider",
  },
];

describe("DropDownMenu component", () => {
  test("when user click on the DropDownMenu, a menu with all options appear in UI", () => {
    // Arrange
    render(
      <Router>
        <DropDownMenu title="UI Organisms" options={options} />
      </Router>
    );
    // Act
    let links = screen.queryAllByRole("link");
    expect(links.length).toBe(0);
    const DropDownButton = screen.getByRole("button");
    fireEvent.click(DropDownButton);
    links = screen.queryAllByRole("link");
    // Assert
    expect(links.length).toBe(2);
    expect(links[0]).toBeInTheDocument();
  });
  test("when user click the second time on the DropDownMenu, the menu disappear from UI", async () => {
    // Arrange
    render(
      <Router>
        <DropDownMenu title="UI Organisms" options={options} />
      </Router>
    );
    // Act
    const DropDownButton = screen.getByRole("button");
    fireEvent.click(DropDownButton);
    fireEvent.click(DropDownButton);
    // Assert
    await waitFor(() => {
      const links = screen.queryAllByRole("link");
      expect(links.length).toBe(0);
    });
  });
  test("when user click everywhere else the options disappear", async () => {
    // Arrange
    render(
      <Router>
        <DropDownMenu title="UI Organisms" options={options} />
      </Router>
    );
    const DropDownButton = screen.getByRole("button");
    let links = screen.queryAllByRole("link");
    // Act
    fireEvent.click(DropDownButton);
    fireEvent.mouseDown(document.body);
    // Assert
    await waitFor(() => {
      links = screen.queryAllByRole("link");
      expect(links.length).toBe(0);
    });
  });
});
