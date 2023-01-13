import axios from "axios";
import { BASE_URL, LOGIN_ENDPOINT } from "./config/constants";

const login = (username, password) =>
  axios.post(
    `${BASE_URL}${LOGIN_ENDPOINT}`,
    { username, password },
    { headers: { "Content-Type": "application/json" } }
  );

const authService = { login };

export default authService;
