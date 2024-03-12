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
    expect(bodyElement).toBeNull();
  });

  it("toggles content when the title is clicked", () => {
    const { getByText, queryByText } = render(
      <Accordion
        title={<h3>A clickable title</h3>}
        body={<div>Toggled content</div>}
      />
    );

    const titleElement = getByText(/A clickable title/i);
    expect(titleElement).toBeInTheDocument();

    let bodyElement = queryByText(/Toggled content/i);
    expect(bodyElement).toBeNull();

    fireEvent.click(titleElement);

    bodyElement = queryByText(/Toggled content/i);
    expect(bodyElement).toBeInTheDocument();

    fireEvent.click(titleElement);
    bodyElement = queryByText(/Toggled content/i);
    expect(bodyElement).toBeNull();
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
