import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";

const login = createAsyncThunk(
  "login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await authService.login(username, password);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error.message);
    }
  }
);

export default login;
