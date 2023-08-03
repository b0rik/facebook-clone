import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk('fetchUser', 
  async () => {
    const response = await fetch('http://localhost:9000/auth/user', {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'include',
    });

    const user = await response.json();
    
    return user;
  });

export { fetchUser };