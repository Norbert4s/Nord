import React from "react";
import { render, screen } from "@testing-library/react";
import LoginSubmitButton from "../LoginSubmitButton";
import { LOADING_MESSAGE } from "../../../config/constants";

describe("LoginSubmitButton", () => {
  test("renders with correct attribute", () => {
    render(<LoginSubmitButton disabled />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
    expect(screen.getByText(LOADING_MESSAGE)).toBeInTheDocument();
  });
});
