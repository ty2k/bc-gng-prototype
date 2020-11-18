import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders Homepage title in default route", () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homepageTitle = getByText(/Homepage/i);
  expect(homepageTitle).toBeInTheDocument();
});
