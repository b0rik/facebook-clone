import { useSelector } from 'react-redux';

import { useGetPostsQuery } from '../utils/state/apiSlice';

import Content from '../components/content/content';
import Side from '../components/side/side';
import ProfileInfo from '../components/side/profileInfo';
import Friends from '../components/friends/friends';
import PostForm from '../components/post/postForm';
import Title from '../components/content/title';
import Post from '../components/post/post';

import '../styles/page.css';

const Profile = () => {
  const { id } = useSelector(state => state.user.data)

  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery();
  
  let content;
  
  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (isSuccess) {
    content = posts.filter(post => post.id === id).map(post => <Post key={post._id} post={post} />);
  } else if (isError) {
    content = <h1>{error}</h1>;
  }

  return (
    <div className='page'>
      <Side borderRight={false}>
        <ProfileInfo user={''}/>
        <Friends />
      </Side>
      <Content>
        <PostForm />
        <Title>Your posts</Title>
        {content}
      </Content>
    </div>
  );
};

export default Profile;