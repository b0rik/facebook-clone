import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import postsReducer from './postsSlice';
import userReducer from './userSlice';
import searchReducer from './searchSlice';
import { apiSlice } from './apiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});