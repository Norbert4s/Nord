import axios from "axios";
import serversService from "../serversService";
import { BASE_URL, SERVERS_ENDPOINT } from "../config/constants";

jest.mock("axios");

test("servers service gets called correctly", async () => {
  const servers = [
    { name: "Germany #85", distance: 1604 },
    { name: "Germany #53", distance: 293 },
  ];
  const token = "abcd123";
  const { getServers } = serversService;

  axios.get.mockImplementationOnce(() => Promise.resolve(servers));

  await expect(getServers(token)).resolves.toEqual(servers);

  expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}${SERVERS_ENDPOINT}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
});
