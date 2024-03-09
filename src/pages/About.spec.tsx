import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About page test suite", () => {
  test("It renders the home page title", async () => {
    render(<About />);

    await screen.getByText("The About Page");

    expect(screen.getByText("The About Page")).toBeTruthy();
  });
});
