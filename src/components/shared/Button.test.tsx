import { render, screen } from "@testing-library/react";
import Button from "./Button";

jest.mock("./Loader", () => () => <div data-testid="loader-mock"></div>);
jest.mock("./Loader.css", () => () => {});
jest.mock("./Button.css", () => () => {});

describe("Shared button component", () => {
  it("renders with children as button text", () => {
    const { asFragment } = render(<Button>Press me!</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with children as button text", () => {
    render(<Button>Press me!</Button>);
    const element = screen.getByText(/Press me!/i);
    expect(element).toBeTruthy();
  });

  it("renders a loader if the loading prop is passed.", () => {
    render(<Button loading={true}>Press me!</Button>);
    const loaderElement = screen.getByTestId("loader-mock");
    expect(loaderElement).toBeTruthy();
  });
});
