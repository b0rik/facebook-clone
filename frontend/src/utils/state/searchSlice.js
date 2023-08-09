import { createSlice } from "@reduxjs/toolkit";

import { searchUsers } from "./actions/searchActions";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder 
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchUsers.rejected, (state) => {
        state.loading = false;
      })
  }
});

export default searchSlice.reducer;