import CommentForm from '../CommentForm/commentForm';
import Comment from '../Comment/comment';

const Comments = ({ postId, comments }) => {
  const commentsList = comments.map(comment => <Comment key={comment._id} comment={comment}/>)

  return (
    <div className="comments">
      <CommentForm postId={postId}/>
      <div className="comments__container">
        {commentsList}
      </div>
    </div>
  );
};

export default Comments;