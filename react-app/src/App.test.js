import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders Login component in default route", () => {
  const { getAllByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const loginLabelledItems = getAllByText(/Login/i);

  expect(loginLabelledItems).toHaveLength(2);

  const loginTitle = loginLabelledItems[0];
  const loginButton = loginLabelledItems[1];

  expect(loginTitle).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
