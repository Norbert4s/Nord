/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

function FormTextField({ input, label, meta: { touched, error } }) {
  const inputRef = useRef(null);
  const type = label === "Password" ? "password" : "text";

  return (
    <div className="field">
      <div className="field__label">{label}</div>
      <input
        {...input}
        type={type}
        className="field__input"
        ref={inputRef}
        autoComplete="on"
      />
      <Overlay
        target={inputRef.current}
        show={error && touched}
        placement="left"
      >
        {(tooltipProps) => (
          <Tooltip id="button-tooltip" {...tooltipProps}>
            {error}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

FormTextField.propTypes = {
  input: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default FormTextField;
