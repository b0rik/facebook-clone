import SideTitle from '../../Side/SideTitle/sideTitle';
import Friend from '../Friend/friend';

import './friends.css';

const Friends = ({ user }) => {
  const { friends } = user;

  const friendsList = friends.map(friend => (
    <Friend key={friend._id} user={{_id: friend._id, name: friend.name, image: friend.profilePicture}} />
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