import SideTitle from './sideTitle';
import Friend from './friend';

import '../styles/friends.css';

const Friends = () => {
  return (
    <div className="friends">
      <SideTitle>Friends</SideTitle>
      <div className="friends__container">
        <Friend user={{_id: '', name: 'Bora Glushko', image: 'https://avatars.githubusercontent.com/u/3390766'}} />
        <Friend user={{_id: '', name: 'Bora Glushko', image: 'https://avatars.githubusercontent.com/u/3390766'}} />
        <Friend user={{_id: '', name: 'Bora Glushko', image: 'https://avatars.githubusercontent.com/u/3390766'}} />
        <Friend user={{_id: '', name: 'Bora Glushko', image: 'https://avatars.githubusercontent.com/u/3390766'}} />
      </div>
    </div>
  );
};

export default Friends;