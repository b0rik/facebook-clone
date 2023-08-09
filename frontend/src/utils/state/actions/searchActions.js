import { createAsyncThunk } from "@reduxjs/toolkit";

const searchUsers = createAsyncThunk('searchUsers', 
  async (query) => {
    const response = await fetch(`http://localhost:9000/users/search/?q=${query}`, {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'include',
    });

    const responseJSON = await response.json();
    
    return responseJSON;
  });

export { searchUsers };