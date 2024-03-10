import { render } from "@testing-library/react";
import Loader from "./Loader";

jest.mock("./Loader.css", () => () => {});

it("matches the snapshot", () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
});
