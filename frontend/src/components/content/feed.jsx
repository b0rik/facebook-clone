import Post from '../post/post';
import Title from './title';

import '../../styles/content/feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <Title>Feed</Title>
      <div className="feed__content">
        <Post post={''} />
        <Post post={''} />
        <Post post={''} />
        <Post post={''} />
      </div>
    </div>
  );
}

export default Feed;