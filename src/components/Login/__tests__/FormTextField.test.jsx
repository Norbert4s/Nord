import React from "react";
import { render, screen } from "@testing-library/react";
import FormTextField from "../FormTextField";

describe("FormTextField", () => {
  test("renders with correct attribute", () => {
    const input = { name: "username" };
    const meta = { touched: false, error: null };

    render(<FormTextField input={input} label="username" meta={meta} />);

    expect(screen.getByText(input.name)).toBeInTheDocument();
  });
});
