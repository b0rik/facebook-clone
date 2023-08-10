import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
    credentials: 'include',
    tagTypes: ['Post', 'Info'],
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: userId => `/posts/${userId}`,
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
      invalidatesTags: ['Post', 'Info'],
    }),
    logoutUser: builder.mutation({
      query: (userData) => ({
        url: '/users/logout',
        method: 'POST',
        invalidatesTags: ['Post', 'Info'],
      }),
    }),
    getUserById: builder.query({
      query: userId => ({
        url: `/users/${userId}`,
      }),
      providesTags: ['Info'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useAddNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserByIdQuery,
} = apiSlice;
