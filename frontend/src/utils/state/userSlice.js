import { createSlice } from "@reduxjs/toolkit";

import { getActiveUser } from "./actions/userActions";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder 
      .addCase(getActiveUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActiveUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getActiveUser.rejected, (state) => {
        state.loading = false;
      })
  }
});

export default userSlice.reducer;