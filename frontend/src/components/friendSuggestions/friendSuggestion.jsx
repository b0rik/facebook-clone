import { Link } from 'react-router-dom';

import '../../styles/friend-suggestions/friend-suggestion.css';

const FriendSuggestion = ({ user }) => {
  const { _id, name, profile_picture } = user;
  
  return (
    <div className="friend-suggestion">
      <img src={profile_picture} alt="" className="friend-suggestion__image" />
      <Link to={''} className="friend-suggestion__name">{name}</Link>
      <button id="friend_suggestion_button" className="friend-suggestion__button">Send friend request</button>
    </div>
  );
};

export default FriendSuggestion;