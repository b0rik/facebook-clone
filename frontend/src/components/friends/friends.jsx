import { useGetUserByIdQuery } from '../../utils/state/apiSlice';

import SideTitle from '../side/sideTitle';
import Friend from './friend';

import '../../styles/friends/friends.css';

const Friends = ({ user }) => {
  const { friends } = user;

  const friendsList = friends.map(friend => (
    <Friend user={{_id: friend.id, name: friend.name, image: friend.profilePicture}} />
  ));

  return (
    <div className="profile-info">
      <div className="friends">
        <SideTitle>Friends</SideTitle>
        <div className="friends__container">
          {(friendsList.length > 0 && friendsList) || <p>No friends. YET!</p>}
        </div>
      </div>  
    </div>
  );
};

export default Friends;