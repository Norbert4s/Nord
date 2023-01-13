import React from "react";
import { useMediaQuery } from "react-responsive";
import NavigationMobile from "./NavigationMobile";
import NavigationDekstop from "./NavigationDesktop";
import { SMALL_BREAKPOINT } from "../../config/constants";

function Navigation() {
  const isPhone = useMediaQuery({ query: `(max-width: ${SMALL_BREAKPOINT})` });

  return isPhone ? <NavigationMobile /> : <NavigationDekstop />;
}

export default Navigation;
