import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Programs link", () => {
  const { getByText } = render(<App />);
  const programLinkElement = getByText(/Programs/i);
  expect(programLinkElement).toBeInTheDocument();
});
