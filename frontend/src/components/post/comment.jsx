import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../../styles/post/comment.css';

import avatarPlaceHolder from '../../assets/avatar-placeholder.png';

const Comment = ({ comment }) => {
  const { _id: currentUserId } = useSelector(state => state.user.data);
  const { author, content, date } = comment;
  const isMyComment = currentUserId === author._id;
  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__avatar">
          <img 
            src={author.profilePicture ? author.profilePicture : avatarPlaceHolder} 
            alt="comment avatar"
          />
        </div>
        <Link to={`/users/${author._id}`} className="comment__name">{author.name}</Link>
        {isMyComment && <button className="comment__delete">X</button>}
      </div>
      <div className="comment__content">{content}</div>
      <div className="comment__date">{new Date(date).toDateString()}</div>
    </div>
  );
};

export default Comment;