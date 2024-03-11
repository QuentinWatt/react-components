import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Alert from "./Alert";

describe("Shared alert component", () => {
  it("it renders with children passed", () => {
    const { getByText } = render(<Alert>This is a message!</Alert>);
    expect(getByText(/This is a message!/i)).toBeInTheDocument();
  });

  it("it renders an info alert by default", () => {
    const { getByText } = render(<Alert>This is a message!</Alert>);
    expect(getByText(/This is a message!/i)).toHaveClass("info");
  });

  it("it renders a danger alert", () => {
    const { getByText } = render(
      <Alert type="danger">This is a message!</Alert>
    );
    expect(getByText(/This is a message!/i)).toHaveClass("danger");
  });

  it("it renders a warning alert", () => {
    const { getByText } = render(
      <Alert type="warning">This is a message!</Alert>
    );
    expect(getByText(/This is a message!/i)).toHaveClass("warning");
  });

  it("it renders a success alert", () => {
    const { getByText } = render(
      <Alert type="success">This is a message!</Alert>
    );
    expect(getByText(/This is a message!/i)).toHaveClass("success");
  });
});
