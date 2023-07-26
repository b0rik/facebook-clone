import { Link } from 'react-router-dom';

import '../../styles/friends/friend.css';

const Friend = ({ user }) => {
  const { _id, name, image } = user;

  return (
    <div className="friend">
      <div className="friend__image">
        <img src={image} alt={name} />
      </div>
      <Link to={''} className="friend__name">{name}</Link>
    </div>
  );
};

export default Friend;