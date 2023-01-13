/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import login from "../actions/authActions";

const initialState = {
  loading: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.loading = false;
      state.error = null;
      state.data = null;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.loading = false;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, clearErrors } = authSlice.actions;
export default authSlice.reducer;
