import { Link } from 'react-router-dom';

import { useGetActiveUserQuery, useDeleteCommentMutation } from '../../../utils/state/apiSlice';

import './comment.css';

import avatarPlaceHolder from '../../../assets/avatar-placeholder.png';

const Comment = ({ comment }) => {
  const { data: activeUserData } = useGetActiveUserQuery();
  const { user: activeUser } = activeUserData.data;
  const [deleteComment] = useDeleteCommentMutation();
  const { _id: commentId, post: postId, author, content, date } = comment;
  const isMyComment = activeUser._id === author._id;

  const handleDelete = async e => {
    e.preventDefault();
    await deleteComment({ postId, commentId });
  }

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
        {isMyComment && <button className="comment__delete" onClick={handleDelete}>X</button>}
      </div>
      <div className="comment__content">{content}</div>
      <div className="comment__date">{new Date(date).toDateString()}</div>
    </div>
  );
};

export default Comment;