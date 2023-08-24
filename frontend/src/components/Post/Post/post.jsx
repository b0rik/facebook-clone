import PostHeader from '../PostHeader/postHeader';
import PostContent from '../PostContent/postContent';
import PostFooter from '../PostFooter/postFooter';

import './post.css';

const Post = ({ post }) => {
  const { _id, author, date, content, likes, comments } = post;

  return (  
    <article className="post">
      <PostHeader 
        author={author}
        date={new Date(date).toDateString()}
      />
      <PostContent>
        {content}
      </PostContent>
      <PostFooter 
        id={_id}
        comments={comments}
        likes={likes}
      />
    </article>
  );
};

export default Post;