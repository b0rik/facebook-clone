import PostHeader from './postHeader';
import PostContent from './postContent';
import PostFooter from './postFooter';

import '../../styles/post/post.css';

const Post = ({ post }) => {
  const { date, content, likes, comments } = post;

  return (
    <article className="post">
      <PostHeader 
        author={post.author}
        date={new Date(date).toDateString()}
      />
      <PostContent>
        {content}
      </PostContent>
      <PostFooter 
        comments={comments}
        likes={likes}
      />
    </article>
  );
};

export default Post;