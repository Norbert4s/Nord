import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/authReducer";
import {
  MAIN_PAGE_NAVIGATION_LABEL,
  LOGIN_NAVIGATION_LABEL,
  LOGOUT_NAVIGATION_LABEL,
  SERVERS_NAVIGATION_LABEL,
} from "../../config/constants";

function NavigationDesktop() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.token);

  return (
    <div className="navigation">
      <div className="navigation__items">
        <div className="navigation__logo">TesoTask</div>
        <div className="navigation__items__links">
          <Link to="/">{MAIN_PAGE_NAVIGATION_LABEL}</Link>
          {loggedIn ? (
            <>
              <Link to="/" onClick={() => dispatch(logout())}>
                {LOGOUT_NAVIGATION_LABEL}
              </Link>
              <Link to="/servers">{SERVERS_NAVIGATION_LABEL}</Link>
            </>
          ) : (
            <Link to="login">{LOGIN_NAVIGATION_LABEL}</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationDesktop;
