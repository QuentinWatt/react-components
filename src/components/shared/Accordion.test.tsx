import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(),
}));

jest.mock("@fortawesome/free-solid-svg-icons", () => ({
  faCaretDown: {},
}));

describe("Shared accordion component", () => {
  it("renders with a title only", () => {
    const { getByText, queryByText } = render(
      <Accordion
        title={<h3>A clickable title</h3>}
        body={<div>Toggled content</div>}
      />
    );

    const titleElement = getByText(/A clickable title/i);
    expect(titleElement).toBeInTheDocument();

    const bodyElement = queryByText(/Toggled content/i);
    expect(bodyElement).not.toHaveClass("open");
  });

  it("toggles content when the title is clicked", async () => {
    const { getByText, getByTestId } = render(
      <Accordion
        title={<h3>A clickable title</h3>}
        body={<div>Toggled content</div>}
      />
    );

    const titleElement = getByText(/A clickable title/i);
    expect(titleElement).toBeInTheDocument();

    const accordionElement = getByTestId("accordion-content");
    expect(accordionElement).not.toHaveClass("open");

    fireEvent.click(titleElement);
    expect(accordionElement).toHaveClass("open");

    fireEvent.click(titleElement);
    expect(accordionElement).not.toHaveClass("open");
  });

  it("fires an onOpen event", () => {
    const onOpenMock = jest.fn();
    const { getByText } = render(
      <Accordion
        title={<h3>title</h3>}
        body={<div>Toggled content</div>}
        onOpen={onOpenMock}
      />
    );

    const title = getByText(/title/i);
    fireEvent.click(title);

    expect(onOpenMock).toHaveBeenCalled();
  });

  it("fires an onClose event", () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Accordion
        title={<h3>title</h3>}
        body={<div>Toggled content</div>}
        onClose={onCloseMock}
      />
    );

    const title = getByText(/title/i);
    fireEvent.click(title); // opens
    fireEvent.click(title); // closes

    expect(onCloseMock).toHaveBeenCalled();
  });
});
