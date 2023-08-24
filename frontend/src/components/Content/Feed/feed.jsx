import { useGetPostsQuery } from '../../../utils/state/apiSlice';

import Post from '../../Post/Post/post';
import Title from '../Title/title';
import Spinner from '../../Spinner/spinner';

import './feed.css';

const Feed = ({ title, user, filter = false }) => {
  const id = user ? user._id : '';
  const {
    data: postsData,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery(id);
  
  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    if (filter) {
      content = postsData.data.posts.filter(post => post.author._id === postsData.data.id).map(post => <Post key={post._id} post={post} />);
    } else {
      content = postsData.data.posts.map(post => <Post key={post._id} post={post} />);
    }
    if (!content.length) {
      content = <p style={{ borderTop: '2px solid var(--primary-gray)' }}>No posts. YET!</p>
    }
  } else if (isError) {
    content = <h1>{error}</h1>;
  }
  
  return (
    <div className="feed">
      <Title>{title}</Title>
      <div className="feed__content">
        {content}
      </div>
    </div>
  );
}

export default Feed;