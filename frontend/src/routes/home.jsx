import Content from '../components/content';
import Side from '../components/side';
import Feed from '../components/feed';
import Notifications from '../components/notifications';
import FriendSuggestions from '../components/friendSuggestions';

import '../styles/page.css';

const Home = () => {
  return (
    <div className="page">
      <Content>
        <Feed />
      </Content>
      <Side borderLeft={false}>
        <Notifications />
        <FriendSuggestions />
      </Side>
    </div>
  );
};

export default Home;