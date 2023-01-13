import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function Home() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Home;
