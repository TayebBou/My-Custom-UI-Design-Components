// @ts-nocheck

import { fireEvent, render, screen } from "@testing-library/react";
import SideBarMenu from "./SideBarMenu";
import bigImageSlider from "../../../assets/icons/bigImageSlider.png";
import organism from "../../../assets/icons/organism.png";
import { BrowserRouter as Router } from "react-router-dom";

const options = [
  {
    path: "/organisms/BigImageSlider",
    title: "BigImageSlider",
    src: bigImageSlider,
    alt: "Big Image Slider",
  },
];

const props = {
  onClose: () => {},
  options,
  title: "UI Organisms",
  src: organism,
  alt: "organism",
  className: "SideBarMenu__test",
};

describe("SideBarMenu component", () => {
  test("should render correctly with props", () => {
    // Arrange
    const { container } = render(
      <Router>
        <SideBarMenu {...props} />
      </Router>
    );
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("should render correctly without props", () => {
    // Arrange
    const { container } = render(<SideBarMenu />);
    // Assert
    expect(container).toMatchSnapshot();
  });
  test("when user click on the sideBarMenu the options are invoked in the document", () => {
    // Arrange
    render(
      <Router>
        <SideBarMenu {...props} />
      </Router>
    );
    let option = screen.queryByText("BigImageSlider");
    expect(option).not.toBeInTheDocument();
    const menuButton = screen.getByRole("button");
    // Act
    fireEvent.click(menuButton);
    // Assert
    option = screen.queryByText("BigImageSlider");
    expect(option).toBeInTheDocument();
  });

  test("sideBarMenu component should contains image in the big menu if it's rendered with valid src prop", () => {
    // Arrange
    render(
      <Router>
        <SideBarMenu {...props} />
      </Router>
    );
    const sideBarMenuImage = screen.getByAltText("organism");
    // Assert
    expect(sideBarMenuImage).toBeInTheDocument();
  });
});
