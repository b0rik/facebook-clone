import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import { apiSlice } from './apiSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});