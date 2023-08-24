import { useParams } from 'react-router-dom';

import { useGetActiveUserQuery, useGetUserByIdQuery } from '../../utils/state/apiSlice';

import Content from '../../components/Content/Content/content';
import Side from '../../components/Side/Side/side';
import ProfileInfo from '../../components/Side/ProfileInfo/profileInfo';
import Friends from '../../components/Friends/Friends/friends';
import PostForm from '../../components/Post/PostForm/postForm';
import Feed from '../../components/Content/Feed/feed';
import FriendRequestButton from '../../components/FriendRequestButton/friendRequestButton';

import '../../styles/page.css';

const Profile = () => {
  const params = useParams();
  const { data: activeUserData } = useGetActiveUserQuery();
  const { user: activeUser } = activeUserData.data;
  console.log(activeUser)
  const userId = params.id ? params.id : '';
  const {
    data: userData,
    isLoading,
  } = useGetUserByIdQuery(userId);

  if (isLoading) return <div>Loading...</div>;
  
  const { user } = userData.data;

  return (
    <div className='page'>
      <Side borderRight={false}>
        <ProfileInfo user={user} />
        <FriendRequestButton currentUser={activeUser} profilePageUser={user}/>
        <Friends user={user} />
      </Side>
      <Content>
        {user._id === activeUser._id && <PostForm />}
        <Feed title={`${user.name}'s Posts`} user={user} filter={true} />
      </Content>
    </div>
  );
};

export default Profile;