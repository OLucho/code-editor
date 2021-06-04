import { render } from "@testing-library/react";
import { Home } from "./Home";
import "@testing-library/jest-dom";

it("should render the welcome message", () => {
  const { queryByText } = render(<Home />);
  expect(queryByText(/Welcome to Code Editor/i)).toBeInTheDocument();
});
