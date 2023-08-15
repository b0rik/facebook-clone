import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAddLikeMutation, useRemoveLikeMutation } from '../../utils/state/apiSlice';

import '../../styles/post/post-footer.css';

const PostFooter = ({ id, comments, likes }) => {
  const { _id: currentUserId } = useSelector(state => state.user.data)
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();

  const [alreadyLiked, setAlreadyLiked] = useState(likes.some(like => like.likedBy === currentUserId));

  const likeHandle = (e) => {
    e.preventDefault();
    if (!alreadyLiked) {
      addLike(id);
      setAlreadyLiked(true);
    } else {
      removeLike(id);
      setAlreadyLiked(false);
    }
  };

  return (
    <div className="post-footer">
      <button id="comment_button" className="post-footer__button">Comment</button>
      <span className="post-footer__count">
        (<span id="comments_count">{comments.length}</span>)
      </span>
      <span className="post-footer__dot">•</span>
      <button id="like_button" className="post-footer__button" onClick={likeHandle}>{alreadyLiked ? 'Dislike' : 'Like'}</button>
      <span className="post-footer__count">
        (<span id="likes_count">{likes.length}</span>)
      </span>
    </div>
  );
}

export default PostFooter;