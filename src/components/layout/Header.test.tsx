import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("It has the correct footer", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it("has a copyright", () => {
    expect(screen.getByText("Qcasts")).toBeTruthy();
  });

  it("has the correct list items", () => {
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("About")).toBeTruthy();
  });
});
