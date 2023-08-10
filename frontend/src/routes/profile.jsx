import { useParams } from 'react-router-dom';

import { useGetUserByIdQuery } from '../utils/state/apiSlice';

import Content from '../components/content/content';
import Side from '../components/side/side';
import ProfileInfo from '../components/side/profileInfo';
import Friends from '../components/friends/friends';
import PostForm from '../components/post/postForm';
import Feed from '../components/content/feed';

import '../styles/page.css';

const Profile = () => {
  const params = useParams();
  const userId = params.id ? params.id : '';
  const {
    data: userData,
    isLoading,
  } = useGetUserByIdQuery(userId);

  if (isLoading) return null;
  
  const { user } = userData.data;

  return (
    <div className='page'>
      <Side borderRight={false}>
        <ProfileInfo user={user} />
        <Friends user={user} />
      </Side>
      <Content>
        <PostForm />
        <Feed title={`${user.name}'s Posts`} user={user} />
      </Content>
    </div>
  );
};

export default Profile;
