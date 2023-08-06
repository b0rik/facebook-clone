import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import postsReducer from './postsSlice';
import userReducer from './userSlice';
import { apiSlice } from './apiSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});