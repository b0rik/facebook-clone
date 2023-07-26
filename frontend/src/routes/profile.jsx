import Content from '../components/content/content';
import Side from '../components/side/side';
import ProfileInfo from '../components/side/profileInfo';
import Friends from '../components/friends/friends';
import PostForm from '../components/post/postForm';
import Title from '../components/content/title';
import Post from '../components/post/post';

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