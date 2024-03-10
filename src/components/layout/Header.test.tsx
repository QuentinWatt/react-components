import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("It has the correct header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a copyright", () => {
    expect(screen.getByText("Qcasts")).toBeTruthy();
  });

  it("has the correct list items", () => {
    expect(screen.getByText("Home")).toBeTruthy();
    expect(screen.getByText("About")).toBeTruthy();
  });
});
