import React from "react";
import { useSelector } from "react-redux";
import LoginSubmitButton from "./LoginSubmitButton";
import { WRONG_CREDENTIALS_MESSAGE } from "../../config/constants";

function LoginSubmit() {
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  return (
    <div className="login__submit">
      {error ? (
        <div className="login__error">{WRONG_CREDENTIALS_MESSAGE}</div>
      ) : null}
      <LoginSubmitButton disabled={loading} />
    </div>
  );
}

export default LoginSubmit;
