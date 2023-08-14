import { useSelector } from 'react-redux';

import SideTitle from './sideTitle';
import FriendRequest from './friendRequest';

import '../../styles/side/notifications.css';

const Notifications = () => {
  const { pendingFriendRequests } = useSelector(state => state.user.data);
  
  const friendRequests = pendingFriendRequests.map(friendRequest => {
    return <FriendRequest key={friendRequest._id} 
      friendRequestId={friendRequest._id} 
      fromUserId={friendRequest.from._id} 
      name={friendRequest.from.name}/>
  });

  return (
    <div className="notifications">
      <SideTitle>Notifications</SideTitle>
      {friendRequests}
    </div>

  );
};

export default Notifications;