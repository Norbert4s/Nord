import axios from "axios";
import authService from "../authService";
import { BASE_URL, LOGIN_ENDPOINT } from "../config/constants";

jest.mock("axios");

test("auth service gets called correctly", async () => {
  const servers = [
    { name: "United States #50", distance: 843 },
    { name: "Latvia #44", distance: 1176 },
  ];
  const username = "Elizabeth";
  const password = "Holmers";
  const { login } = authService;

  axios.post.mockImplementationOnce(() => Promise.resolve(servers));

  await expect(login(username, password)).resolves.toEqual(servers);

  expect(axios.post).toHaveBeenCalledWith(
    `${BASE_URL}${LOGIN_ENDPOINT}`,
    { username, password },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
});
