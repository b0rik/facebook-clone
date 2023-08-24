import { useState, useEffect } from 'react';

import { useSendFriendRequestMutation } from '../utils/state/apiSlice';

import Button from './button';

const FriendRequestButton = ({ currentUser, profilePageUser }) => {
  const [isPending, setIsPending] = useState(false);
  const [sendFriendRequest] = useSendFriendRequestMutation();
  let showButton = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendFriendRequest(profilePageUser._id);
      setIsPending(true);
    } catch (error) {
      console.error('Failed to send friend request:', error);
    }
  };

  if (currentUser._id === profilePageUser._id) {
    showButton = false;
  }

  if (currentUser.friends.includes(profilePageUser._id)) {
    showButton = false;
  }

  useEffect(() => {
    setIsPending(false);
    if (currentUser.sentFriendRequests.some((friendRequests) => friendRequests.to._id === profilePageUser._id)) {
      setIsPending(true);
    }
  }, [currentUser.sentFriendRequests, profilePageUser._id]);
  
  return !showButton ? null : (
    <Button
      text={isPending ? 'pending...' : 'send friend request'}
      disabled={isPending}
      onClick={handleSubmit}
    />
  );
};

export default FriendRequestButton;
