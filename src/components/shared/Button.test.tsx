import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

jest.mock("./Loader", () => () => <div data-testid="loader-mock">loader</div>);
jest.mock("./Loader.css", () => () => {});

describe("Shared button component", () => {
  it("renders with children, and props as button text", () => {
    const onClickMock = jest.fn();
    const { asFragment } = render(
      <Button onClick={onClickMock} type="submit" className="test-class">
        Press me!
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with children as button text", () => {
    render(<Button>Press me!</Button>);
    const element = screen.getByText(/Press me!/i);
    expect(element).toBeInTheDocument();
  });

  it("renders a loader if the loading prop is passed", () => {
    render(<Button loading={true}>Press me!</Button>);
    const loaderElement = screen.getByTestId("loader-mock");
    expect(loaderElement).toBeTruthy();

    expect(screen.queryByText(/Press me!/i)).toBeNull();
  });

  it("defaults to type button", () => {
    render(<Button>Press me!</Button>);
    const button = screen.getByText(/Press me/i);
    expect(button).toHaveAttribute("type", "button");
  });

  it("changes the button type with a prop", () => {
    render(<Button type="submit">Press me!</Button>);
    const button = screen.getByText(/Press me/i);
    expect(button).toHaveAttribute("type", "submit");
  });

  test("renders with custom className", () => {
    const { getByText } = render(
      <Button className="custom-class">Click Me</Button>
    );
    const button = getByText(/Click Me/i);
    expect(button).toHaveClass("custom-class");
  });

  it("calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Press me!</Button>
    );

    const button = getByText(/Press me!/i);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
