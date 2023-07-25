import Content from '../components/content';
import Side from '../components/side';
import ProfileInfo from '../components/profileInfo';
import Friends from '../components/friends';
import PostForm from '../components/postForm';
import Title from '../components/title';
import Post from '../components/post';

import '../styles/page.css';

const Profile = () => {
  return (
    <div className='page'>
      <Side borderRight={false}>
        <ProfileInfo user={''}/>
        <Friends />
      </Side>
      <Content>
        <PostForm />
        <Title>Your posts</Title>
        <Post post={''}/>
        <Post post={''}/>
        <Post post={''}/>
        <Post post={''}/>
      </Content>
    </div>
  );
};

export default Profile;