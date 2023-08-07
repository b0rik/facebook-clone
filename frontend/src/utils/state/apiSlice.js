import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:9000',
    credentials: 'include'
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts/addPost',
        method: 'POST',
        body: initialPost,
      })
    }),
    addNewUser: builder.mutation({
      query: (userData) => ({
        url: '/users/create',
        method: 'POST',
        body: userData,
      })
    })
  })
});

export const { useGetPostsQuery, useAddNewPostMutation, useAddNewUserMutation } = apiSlice;