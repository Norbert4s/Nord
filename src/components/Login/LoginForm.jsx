/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Field, Form } from "react-final-form";
import LoginSubmit from "./LoginSubmit";
import validate from "../../utils/validate";
import FormTextField from "./FormTextField";

function LoginForm({ onSubmit }) {
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form className="login__form" onSubmit={handleSubmit}>
            <Field name="username" component={FormTextField} label="Username" />
            <Field name="password" component={FormTextField} label="Password" />
            <LoginSubmit />
          </form>
        )}
      />
    </div>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
