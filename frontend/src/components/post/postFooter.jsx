import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAddLikeMutation, useRemoveLikeMutation } from '../../utils/state/apiSlice';

import Comments from './comments';


import '../../styles/post/post-footer.css';

const PostFooter = ({ id, comments, likes }) => {
  const { _id: currentUserId } = useSelector(state => state.user.data)
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);


  const [alreadyLiked, setAlreadyLiked] = useState(likes.some(like => like.likedBy === currentUserId));

  const likeHandle = async (e) => {
    e.preventDefault();
    if (!alreadyLiked) {
      await addLike(id);
      setAlreadyLiked(true);
    } else {
      await removeLike(id);
      setAlreadyLiked(false);
    }
  };

  return (
    <div className="post-footer">
      <div className="post-footer__buttons">
        <button 
          id="comment_button" 
          className="post-footer__button" 
          onClick={e => {
            e.preventDefault();
            setIsCommentsVisible(!isCommentsVisible);
          }}
        >
            Comments
        </button>
        <span className="post-footer__count">
          (<span id="comments_count">{comments.length}</span>)
        </span>
        <span className="post-footer__dot">•</span>
        <button id="like_button" className="post-footer__button" onClick={likeHandle}>{alreadyLiked ? 'Dislike' : 'Like'}</button>
        <span className="post-footer__count">
          (<span id="likes_count">{likes.length}</span>)
        </span>
      </div>
      <div className="post-footer__comments">
        {isCommentsVisible && <Comments postId={id} comments={comments}/>}
      </div>
    </div>
  );
}

export default PostFooter;