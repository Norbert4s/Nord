import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/authReducer";
import Burger from "../../assets/burger-menu.svg";
import {
  MAIN_PAGE_NAVIGATION_LABEL,
  LOGIN_NAVIGATION_LABEL,
  LOGOUT_NAVIGATION_LABEL,
  SERVERS_NAVIGATION_LABEL,
} from "../../config/constants";

function NavigationMobile() {
  const loggedIn = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const toggleNavigation = () => setShow(!show);

  return (
    <div
      className={`${
        show ? "navigation--mobile-wrapper__open" : ""
      } navigation--mobile-wrapper`}
    >
      <div className="navigation--mobile">
        <Burger
          onClick={toggleNavigation}
          className="navigation--mobile__burger"
        />
        <div className="navigation--mobile__items">
          <div className="navigation--mobile__logo">TesoTask</div>
          {show && (
            <div className="navigation--mobile__items__links">
              <Link to="/" onClick={toggleNavigation}>
                {MAIN_PAGE_NAVIGATION_LABEL}
              </Link>
              {loggedIn ? (
                <>
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(logout());
                      toggleNavigation();
                    }}
                  >
                    {LOGOUT_NAVIGATION_LABEL}
                  </Link>
                  <Link to="/servers" onClick={toggleNavigation}>
                    {SERVERS_NAVIGATION_LABEL}
                  </Link>
                </>
              ) : (
                <Link to="login" onClick={toggleNavigation}>
                  {LOGIN_NAVIGATION_LABEL}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
