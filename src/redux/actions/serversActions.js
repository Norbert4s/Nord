import { createAsyncThunk } from "@reduxjs/toolkit";
import serversService from "../../services/serversService";

const getServers = createAsyncThunk(
  "servers",
  async (token, { rejectWithValue }) => {
    try {
      const response = await serversService.getServers(token);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error.message);
    }
  }
);

export default getServers;
