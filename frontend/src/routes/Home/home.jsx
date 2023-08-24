import Content from '../../components/Content/Content/content';
import Side from '../../components/Side/Side/side';
import Feed from '../../components/Content/Feed/feed';
import Notifications from '../../components/Side/Notifications/notifications';

import '../../styles/page.css';

const Home = () => {

  return (
    <div className="page">
      <Content>
        <Feed title="Feed"/>
      </Content>
      <Side borderLeft={false}>
        <Notifications />
      </Side>
    </div>
  );
};

export default Home;