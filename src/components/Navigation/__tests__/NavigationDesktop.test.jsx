import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import NavigationDesktop from "../NavigationDesktop";
import {
  MAIN_PAGE_NAVIGATION_LABEL,
  LOGIN_NAVIGATION_LABEL,
} from "../../../config/constants";

describe("NavigationDesktop", () => {
  test("renders", () => {
    const mockStore = configureStore([]);
    const initialState = { auth: { loggedIn: false } };
    const store = mockStore(initialState);

    render(
      <Router>
        <Provider store={store}>
          <NavigationDesktop />
        </Provider>
      </Router>
    );

    expect(screen.getByText(MAIN_PAGE_NAVIGATION_LABEL)).toBeInTheDocument();
    expect(screen.getByText(LOGIN_NAVIGATION_LABEL)).toBeInTheDocument();
  });
});
