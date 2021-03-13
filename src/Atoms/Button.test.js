import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled  present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading if isLoading present", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render tag a", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> componenent", () => {
  const { container } = render(
    <Router>
      <Button href="#" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
