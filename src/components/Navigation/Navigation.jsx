import React from "react";
import { useMediaQuery } from "react-responsive";
import NavigationMobile from "./NavigationMobile";
import NavigationDekstop from "./NavigationDesktop";
import { SMALL_BREAKPOINT } from "../../config/constants";

function Navigation() {
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${SMALL_BREAKPOINT})`,
  });

  return isSmallScreen ? <NavigationMobile /> : <NavigationDekstop />;
}

export default Navigation;
