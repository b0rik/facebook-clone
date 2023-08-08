import Content from '../components/content/content';
import Side from '../components/side/side';
import Feed from '../components/content/feed';
import Notifications from '../components/side/notifications';

import '../styles/page.css';

const Home = () => {
  return (
    <div className="page">
      <Content>
        <Feed />
      </Content>
      <Side borderLeft={false}>
        {/* <Notifications /> */}
      </Side>
    </div>
  );
};

export default Home;