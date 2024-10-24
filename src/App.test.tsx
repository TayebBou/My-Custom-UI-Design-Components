import { renderWithProviders } from "./utils/test-utils";
import App from "./App";

describe("App component", () => {
  test("should render correctly", () => {
    // Arrange
    const { container } = renderWithProviders(<App />);
    // Assert
    expect(container).toMatchSnapshot();
  });
});
