import React from "react";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import Servers from "../Servers";
import { TRY_AGAIN_MESSAGE } from "../../../config/constants";

const mockStore = configureStore([]);

describe("Servers", () => {
  test("renders with table", () => {
    const serversData = [
      { name: "United States #50", distance: 843 },
      { name: "Latvia #44", distance: 1176 },
    ];
    const initialState = {
      servers: { data: serversData, error: null, loading: false },
      auth: { token: "123abc" },
    };

    const store = mockStore(initialState);

    render(
      <Router>
        <Provider store={store}>
          <Servers />
        </Provider>
      </Router>
    );

    expect(screen.getByText(serversData[0].name)).toBeInTheDocument();
    expect(screen.getByText(serversData[1].distance)).toBeInTheDocument();
  });

  test("renders error", () => {
    const initialState = {
      servers: { data: "data", error: "bad thing", loading: false },
      auth: { token: "123abc" },
    };

    const store = mockStore(initialState);

    render(
      <Router>
        <Provider store={store}>
          <Servers />
        </Provider>
      </Router>
    );

    expect(
      screen.getByText(new RegExp(initialState.servers.error, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(TRY_AGAIN_MESSAGE)).toBeInTheDocument();
  });
});
