import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-link");
  expect(linkElement).toBeInTheDocument();
});

test("url is correct", () => {
  render(<App />);
  const linkEl = screen.getByTestId("learn-link");
  expect(linkEl.href).toContain("utlimateqa.com");
});
