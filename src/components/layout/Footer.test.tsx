import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("It has the correct footer", () => {
  it("has a copyright", () => {
    render(<Footer />);
    expect(screen.getByText("© 2024 Quentin Watt")).toBeTruthy();
    expect(screen.getByText("Qcasts")).toBeTruthy();
  });

  it("has the correct list items", () => {
    render(<Footer />);
    expect(screen.getAllByText("A list item")).toBeTruthy();
    expect(screen.getAllByText("Second item")).toBeTruthy();
    expect(screen.getAllByText("Third item")).toBeTruthy();
    expect(screen.getAllByText("Fourth item")).toBeTruthy();
  });
});
