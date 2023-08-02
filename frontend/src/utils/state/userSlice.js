import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    name: null,
  },
  reducers: {}
});

export default userSlice.reducer;