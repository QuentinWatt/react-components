import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home page test suite", () => {
  test("It renders the home page title", async () => {
    render(<Home />);

    await screen.getAllByText("The Home Page");

    expect(screen.getByText("The Home Page")).toBeTruthy();
  });
});
