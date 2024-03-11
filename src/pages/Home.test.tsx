import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("../components/shared/Button", () => () => (
  <button data-testid="button-mock">Click me</button>
));

describe("Home page test suite", () => {
  test("It renders the home page title", async () => {
    render(<Home />);
    await screen.getAllByText("Home Page");
    expect(screen.getByText("Home Page")).toBeTruthy();
  });
});
