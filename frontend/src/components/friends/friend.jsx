import { Link } from 'react-router-dom';

import '../../styles/friends/friend.css';

import avatarPlaceHolder from '../../assets/avatar-placeholder.png';

const Friend = ({ user }) => {
  const { _id, name, image } = user;

  return (
    <div className="friend">
      <div className="friend__image">
        <img src={image ? image : avatarPlaceHolder} alt={name} />
      </div>
      <Link to={''} className="friend__name">{name}</Link>
    </div>
  );
};

export default Friend;