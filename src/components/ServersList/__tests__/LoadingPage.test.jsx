import React from "react";
import { render, screen } from "@testing-library/react";
import { LOADING_MESSAGE } from "../../../config/constants";
import LoadingPage from "../LoadingPage";

describe("LoadingPage", () => {
  test("renders", () => {
    render(<LoadingPage />);

    expect(screen.getByText(LOADING_MESSAGE)).toBeInTheDocument();
  });
});
