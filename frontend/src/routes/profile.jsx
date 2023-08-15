import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetUserByIdQuery } from '../utils/state/apiSlice';

import Content from '../components/content/content';
import Side from '../components/side/side';
import ProfileInfo from '../components/side/profileInfo';
import Friends from '../components/friends/friends';
import PostForm from '../components/post/postForm';
import Feed from '../components/content/feed';
import FriendRequestButton from '../components/friendRequestButton';

import '../styles/page.css';

const Profile = () => {
  const params = useParams();
  const { data: currentUserData, loading: currentUserLoading } = useSelector(state => state.user)
  const userId = params.id ? params.id : '';
  const {
    data: userData,
    isLoading,
  } = useGetUserByIdQuery(userId);

  if (currentUserLoading || isLoading) return null;
  
  const { user } = userData.data;

  return (
    <div className='page'>
      <Side borderRight={false}>
        <ProfileInfo user={user} />
        <FriendRequestButton currentUser={currentUserData} profilePageUser={user}/>
        <Friends user={user} />
      </Side>
      <Content>
        {user._id === currentUserData._id && <PostForm />}
        <Feed title={`${user.name}'s Posts`} user={user} filter={true} />
      </Content>
    </div>
  );
};

export default Profile;
