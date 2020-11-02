import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Programs & Services page title", () => {
  const { getByText } = render(<App />);
  const programTitle = getByText(/Programs/i);
  console.log(programTitle);
  expect(programTitle).toBeInTheDocument();
});
