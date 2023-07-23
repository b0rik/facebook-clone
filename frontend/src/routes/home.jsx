import Content from '../components/content';
import Side from '../components/side';
import Feed from '../components/feed';

import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <Content>
        <Feed />
      </Content>
      <Side borderLeft={false}>
      </Side>
    </div>
  );
};

export default Home;