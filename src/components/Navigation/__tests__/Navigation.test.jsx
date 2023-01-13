import React from "react";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Navigation from "../Navigation";
import {
  MAIN_PAGE_NAVIGATION_LABEL,
  LOGIN_NAVIGATION_LABEL,
} from "../../../config/constants";

describe("Navigation", () => {
  test("renders", () => {
    const initialState = {
      auth: { token: null },
    };
    const mockStore = configureStore([]);
    const store = mockStore(initialState);

    render(
      <Router>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </Router>
    );

    expect(screen.getByText(LOGIN_NAVIGATION_LABEL)).toBeInTheDocument();
    expect(screen.getByText(MAIN_PAGE_NAVIGATION_LABEL)).toBeInTheDocument();
  });
});
