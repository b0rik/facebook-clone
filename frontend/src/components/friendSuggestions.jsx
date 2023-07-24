import SideTitle from './sideTitle';
import FriendSuggestion from './friendSuggestion';

import '../styles/friend-suggestions.css'

const FriendSuggestions = () => {
  const mockUser = {
    _id: '3ef66ba98cacce0a5d9f61cd',
    name: 'Carmen Considine',
    profile_picture: 'https://avatars.githubusercontent.com/u/3390766'
  };

  return (
    <div className="friend-suggestions">
      <SideTitle>People on our network</SideTitle>
      <FriendSuggestion user={mockUser}/>
      <FriendSuggestion user={mockUser}/>
    </div>
  )
};

export default FriendSuggestions;