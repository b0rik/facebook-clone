import Post from '../components/post';
import Title from '../components/title';

import '../styles/feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <Title>Feed</Title>
      <div className="feed__content">
        <Post post={''} />
      </div>
    </div>
  );
}

export default Feed;