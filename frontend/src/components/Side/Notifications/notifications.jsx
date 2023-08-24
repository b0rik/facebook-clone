import { useSelector } from 'react-redux';

import { activeUserSelector } from '../../../utils/state/apiSelectors';

import SideTitle from '../SideTitle/sideTitle';
import FriendRequest from '../FriendRequest/friendRequest';
import Spinner from '../../Spinner/spinner';

import './notifications.css';

const Notifications = () => {
  const {
    data: activeUserData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useSelector(activeUserSelector);

  if (isLoading) {
    return <Spinner />
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
