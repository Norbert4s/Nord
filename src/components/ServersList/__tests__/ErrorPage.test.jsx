import React from "react";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "../ErrorPage";
import {
  TRY_AGAIN_MESSAGE,
  SERVERS_ERROR_MESSAGE,
} from "../../../config/constants";

const mockStore = configureStore([]);

describe("ErrorPage", () => {
  test("renders", () => {
    const serversData = [
      { name: "United States #50", distance: 843 },
      { name: "Latvia #44", distance: 1176 },
    ];

    const initialState = {
      servers: { data: serversData, error: null, loading: false },
    };
    const store = mockStore(initialState);

    const onSubmit = jest.fn();

    render(
      <Router>
        <Provider store={store}>
          <ErrorPage onSubmit={onSubmit} />
        </Provider>
      </Router>
    );

    expect(screen.getByText(TRY_AGAIN_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText(SERVERS_ERROR_MESSAGE)).toBeInTheDocument();
  });
});
