import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

jest.mock("./Loader.css", () => () => {});

describe("Shared loader component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has a loader div", () => {
    render(<Loader />);
    const element = screen.queryByTestId("loader");
    expect(element).toBeInTheDocument();
  });
});
