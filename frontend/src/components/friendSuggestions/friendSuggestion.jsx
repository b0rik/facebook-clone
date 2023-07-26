import { Link } from 'react-router-dom';

import Button from '../../components/button';

import '../../styles/friend-suggestions/friend-suggestion.css';

const FriendSuggestion = ({ user }) => {
  const { _id, name, profile_picture } = user;
  
  return (
    <div className="friend-suggestion">
      <img src={profile_picture} alt="" className="friend-suggestion__image" />
      <Link to={''} className="friend-suggestion__name">{name}</Link>
      <Button text="send friend request"/>
    </div>
  );
};

export default FriendSuggestion;