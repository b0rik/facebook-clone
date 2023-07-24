import Post from '../components/post';

import '../styles/feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <h1 className="feed__title">Feed</h1>
      <div className="feed__content">
        <Post post={''} />
      </div>
    </div>
  );
}

export default Feed;