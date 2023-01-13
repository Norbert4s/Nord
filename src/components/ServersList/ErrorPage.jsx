import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getServers from "../../redux/actions/serversActions";
import {
  LOADING_MESSAGE,
  TRY_AGAIN_MESSAGE,
  SERVERS_ERROR_MESSAGE,
} from "../../config/constants";

function ErrorPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.token);
  const servers = useSelector((state) => state.servers.data);
  const loading = useSelector((state) => state.servers.loading);
  const error = useSelector((state) => state.servers.error);

  useEffect(() => {
    if (servers) {
      navigate("/servers");
    }
  }, [servers]);

  return (
    <div className="card">
      <div className="error">
        {SERVERS_ERROR_MESSAGE}
        <div className="error__message">Error message: {error}</div>
        <button
          className="button--error"
          type="submit"
          onClick={() => dispatch(getServers(authToken))}
        >
          {loading ? LOADING_MESSAGE : TRY_AGAIN_MESSAGE}
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
