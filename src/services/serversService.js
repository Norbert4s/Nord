import axios from "axios";
import { BASE_URL, SERVERS_ENDPOINT } from "./config/constants";

const getServers = (token) =>
  axios.get(`${BASE_URL}${SERVERS_ENDPOINT}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

const serversService = { getServers };

export default serversService;
