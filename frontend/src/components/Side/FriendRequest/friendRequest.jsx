import { Link } from 'react-router-dom';

import { useAcceptFriendRequestMutation, useDeclineFriendRequestMutation } from '../../../utils/state/apiSlice';

import Button from '../../Button/button';

import './friend-request.css';

const FriendRequest = ({ friendRequestId, fromUserId, name }) => {
  const [acceptFriendRequest, { isLoading: isAcceptLoading }] = useAcceptFriendRequestMutation();
  const [declineFriendRequest, { isLoading: isDeclineLoading }] = useDeclineFriendRequestMutation();

  const handleAccept = async e => {
    e.preventDefault();
    await acceptFriendRequest(friendRequestId);
  };

  const handledecline = async e => {
    e.preventDefault();
    await declineFriendRequest(friendRequestId);
  };

  return (
    <div className="friend-request">
      <div className="friend-request__header">
        <Link to={`/users/${fromUserId}`} className="friend-request__name">{name}</Link>
        <span className="friend-request__text"> sent you a friend request</span>
      </div>
      <div className="friend-request__buttons">
        <Button text="accept" onClick={handleAccept} disabled={isAcceptLoading} />
        <Button text="decline" onClick={handledecline} disabled={isDeclineLoading} />
      </div>
    </div>
  );
}

export default FriendRequest;