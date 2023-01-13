import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import login from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/slices/authReducer";

function Login() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/servers");
    }
  }, [loggedIn]);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  return (
    <div className="login">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
