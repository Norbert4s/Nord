import React from "react";
import PropTypes from "prop-types";
import { LOGIN_LABEL, LOADING_MESSAGE } from "../../config/constants";

function LoginSubmitButton({ disabled }) {
  return (
    <button type="submit" className="login__button" disabled={disabled}>
      {disabled ? `${LOADING_MESSAGE}` : `${LOGIN_LABEL}`}
    </button>
  );
}

LoginSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default LoginSubmitButton;
