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
        body: initialPost
      })
    })
  })
});

export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice;