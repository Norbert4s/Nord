import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import LoginSubmit from "../LoginSubmit";
import { WRONG_CREDENTIALS_MESSAGE } from "../../../config/constants";

const mockStore = configureStore([]);

describe("LoginSubmit", () => {
  test("renders with correct attribute", () => {
    const initialState = { auth: { loading: true, error: null } };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LoginSubmit />
      </Provider>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });

  test("renders error", () => {
    const mockError = "very bad!";
    const initialState = { auth: { loading: true, error: mockError } };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LoginSubmit />
      </Provider>
    );

    expect(screen.getByText(WRONG_CREDENTIALS_MESSAGE)).toBeInTheDocument();
  });
});
