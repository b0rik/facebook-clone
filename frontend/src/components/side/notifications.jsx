import { useSelector } from 'react-redux';

import SideTitle from './sideTitle';
import SideInfo from './sideInfo';

import '../../styles/side/notifications.css';

const Notifications = ({ children }) => {
  const { pendingFriendRequests } = useSelector(state => state.user.data);
  
  const notifications = pendingFriendRequests.map(friendRequest => {
    return <SideInfo>{friendRequest.from.name} sent you a friend request.</SideInfo>;
  });

  return (
    <div className="notifications">
      <SideTitle>Notifications</SideTitle>
      {notifications}
    </div>

  );
};

export default Notifications;