import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";

jest.mock("@/components/shared/Button", () => () => (
  <button data-testid="button-mock">button</button>
));
jest.mock("@/components/shared/Alert", () => () => (
  <div data-testid="alert-mock">alert</div>
));
jest.mock("@/components/shared/Accordion", () => () => (
  <div data-testid="accordion-mock">accordion</div>
));

test("navigation changes pages", () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );

  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/About/i));
  expect(screen.getByText(/About Page/i)).toBeInTheDocument();
});
