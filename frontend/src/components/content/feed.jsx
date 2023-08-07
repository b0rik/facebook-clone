import { useGetPostsQuery } from '../../utils/state/apiSlice';

import Post from '../post/post';
import Title from './title';

import '../../styles/content/feed.css';

const Feed = () => {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();
  
  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (isSuccess) {
    content = posts.map(post => <Post key={post._id} post={post} />);
  } else if (isError) {
    content = <h1>{error}</h1>;
  }

  return (
    <div className="feed">
      <Title>Feed</Title>
      <div className="feed__content">
        {content}
      </div>
    </div>
  );
}

export default Feed;