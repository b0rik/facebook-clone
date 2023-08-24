import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000',
    credentials: 'include',
    tagTypes: ['Post', 'Profile', 'ActiveUser'],
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
      invalidatesTags: (result, error) => error ? [] : ['Post', 'Profile', 'ActiveUser'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['ActiveUser'],
    }),
    getUserById: builder.query({
      query: userId => ({
        url: `/users/${userId}`,
      }),
      providesTags: ['Profile'],
    }),
    sendFriendRequest: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}/sendFriendRequest`,
        method: 'POST',
      }),
      invalidatesTags: ['ActiveUser']
    }),
    acceptFriendRequest: builder.mutation({
      query: (friendRequestId) => ({
        url: `/friendRequests/${friendRequestId}/accept`,
        method: 'POST',
      }),
      invalidatesTags: ['Post', 'Profile', 'ActiveUser'],
    }),
    declineFriendRequest: builder.mutation({
      query: (friendRequestId) => ({
        url: `/friendRequests/${friendRequestId}/decline`,
        method: 'POST',
      }),
    }),
    addLike: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/like/addLike`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    removeLike: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}/like/removeLike`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    addComment: builder.mutation({
      query: ({ postId, content }) => ({
        url: `/posts/${postId}/comment/addComment`,
        method: 'POST',
        body: { content }
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    deleteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `/posts/${postId}/comment/deleteComment`,
        method: 'POST',
        body: { commentId }
      }),
      invalidatesTags: (result, error, args) => [{ type: 'Post', id: args.id }]
    }),
    getActiveUser: builder.query({
      query: () => ({
        url: '/auth/user',
      }),
      providesTags: ['ActiveUser'],
    }),
    searchUsers: builder.query({
      query: (query) => ({
        url: `/users/search/?q=${query}`
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
  useGetUserByIdQuery,
  useSendFriendRequestMutation,
  useAcceptFriendRequestMutation,
  useDeclineFriendRequestMutation,
  useAddLikeMutation,
  useRemoveLikeMutation,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetActiveUserQuery,
  useLazySearchUsersQuery,
} = apiSlice;
