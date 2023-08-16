import { Link } from 'react-router-dom';

import '../../styles/post/comment.css';

import avatarPlaceHolder from '../../assets/avatar-placeholder.png';

const Comment = ({ comment }) => {
  const { author, content, date } = comment;

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
      </div>
      <div className="comment__content">{content}</div>
      <div className="comment__date">{new Date(date).toDateString()}</div>
    </div>
  );
};

export default Comment;