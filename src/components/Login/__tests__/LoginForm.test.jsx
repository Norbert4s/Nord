import React from "react";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginForm from "../LoginForm";

const mockStore = configureStore([]);

describe("FormTextField", () => {
  test("renders with children elements", () => {
    const initialState = { auth: { loading: false, error: null } };
    const store = mockStore(initialState);

    const onSubmit = jest.fn();

    render(
      <Provider store={store}>
        <LoginForm onSubmit={onSubmit} />
      </Provider>
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});
