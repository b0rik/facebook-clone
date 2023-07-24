import '../styles/post-footer.css';

const PostFooter = ({ comments, likes }) => {
  return (
    <div className="post-footer">
      <button id="comment_button" className="post-footer__button">Comment</button>
      <span className="post-footer__count">
        (<span id="comments_count">{comments.length}</span>)
      </span>
      <span className="post-footer__dot">•</span>
      <button id="like_button" className="post-footer__button">Like</button>
      <span className="post-footer__count">
        (<span id="likes_count">{likes.length}</span>)
      </span>
    </div>
  );
}

export default PostFooter;