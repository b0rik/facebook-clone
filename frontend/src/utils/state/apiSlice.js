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
      providesTags: (result = [], error, args) => [
        'Post',
        ...result.data.posts.map(({ _id }) => ({ type: 'Post', id: _id }))
      ]
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
    sendFriendRequest: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/sendFriendRequest`,
        method: 'POST',
      }),
    }),
    acceptFriendRequest: builder.mutation({
      query: (friendRequestId) => ({
        url: `/friendRequests/${friendRequestId}/accept`,
        method: 'POST',
      }),
    }),
    declineFriendRequest: builder.mutation({
      query: (friendRequestId) => ({
        url: `/friendRequests/${friendRequestId}/decline`,
        method: 'POST',
      }),
    }),
    addLike: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/addLike`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    removeLike: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/removeLike`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    addComment: builder.mutation({
      query: ({ postId, content }) => ({
        url: `/posts/${postId}/addComment`,
        method: 'POST',
        body: { content }
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
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
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
  useAddLikeMutation,
  useRemoveLikeMutation,
  useAddCommentMutation,
} = apiSlice;
