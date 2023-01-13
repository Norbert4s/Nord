/* eslint-disable no-else-return */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getServers from "../../redux/actions/serversActions";
import ServersTable from "./ServersTable";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

function Servers() {
  const loggedIn = useSelector((state) => state.auth.token);
  const servers = useSelector((state) => state.servers.data);
  const error = useSelector((state) => state.servers.error);
  const loading = useSelector((state) => state.servers.loading);
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn && !servers) {
      dispatch(getServers(authToken));
    } else if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  if (loggedIn) {
    if (loading) {
      return <LoadingPage />;
    } else if (!error && servers) {
      return (
        <div className="servers">
          <ServersTable />
        </div>
      );
    } else if (error) {
      return <ErrorPage />;
    }
  }

  return null;
}

export default Servers;
