/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import servers from "../actions/serversActions";

const initialState = { data: null, loading: false, errors: null };

const serversSlice = createSlice({
  name: "servers",
  initialState,
  extraReducers: {
    [servers.pending]: (state) => {
      state.loading = true;
    },
    [servers.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [servers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default serversSlice.reducer;
