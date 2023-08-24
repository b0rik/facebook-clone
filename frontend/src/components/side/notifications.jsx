import { useGetActiveUserQuery } from '../../utils/state/apiSlice';

import SideTitle from './sideTitle';
import FriendRequest from './friendRequest';

import '../../styles/side/notifications.css';

const Notifications = () => {
  const {
    data: activeUserData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetActiveUserQuery();

  if (isLoading) {
    return <div>Loading...</div>
  } else if (isSuccess) {
    const { pendingFriendRequests } = activeUserData.data.user;
    const friendRequests = pendingFriendRequests.map((friendRequest) => {
      return (
        <FriendRequest
          key={friendRequest._id}
          friendRequestId={friendRequest._id}
          fromUserId={friendRequest.from._id}
          name={friendRequest.from.name}
        />
      );
    });

    return (
      <div className='notifications'>
        <SideTitle>Notifications</SideTitle>
        {friendRequests}
      </div>
    );
  } else if (isError) {
    return <div>{error}</div>
  }
};

export default Notifications;
