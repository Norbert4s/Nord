import React from "react";
import { LOADING_MESSAGE } from "../../config/constants";

function LoadingPage() {
  return (
    <div className="card">
      <div className="loading">
        <span className="loading__message">{LOADING_MESSAGE}</span>
      </div>
    </div>
  );
}

export default LoadingPage;
