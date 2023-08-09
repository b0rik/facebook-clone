import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
    credentials: 'include',
    tagTypes: ['Post'],
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/posts/addPost',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Post'],
    }),
    addNewUser: builder.mutation({
      query: (userData) => ({
        url: '/users/create',
        method: 'POST',
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Post'],
    }),
    logoutUser: builder.mutation({
      query: (userData) => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useAddNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = apiSlice;
