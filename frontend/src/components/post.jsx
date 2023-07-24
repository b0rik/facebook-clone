import PostHeader from '../components/postHeader';
import PostContent from '../components/postContent';
import PostFooter from '../components/postFooter';

import '../styles/post.css';

const Post = ({ post }) => {
  //mock component DELETE WHEN FINISH
  const mockPost = {
    _id: 'fd3eaac7e71bde1bce1d8e66',
    author: {
      _id: 'b61956e1fce4dfb4db2fe3b5',
      profile_picture: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg',
      name: 'Sidney Fadel III'
    },
    date: '2023-05-05T15:53:13.499Z',
    content: 'Minima omnis porro officiis fugiat beatae blanditiis recusandae. Repellendus illum expedita occaecati doloremque eaque ea. Odio illum distinctio repellendus ab velit.',
    likes: [],
    comments: []
  };
  post = mockPost;
  const { date, content, likes, comments } = post;

  return (
    <article className="post">
      <PostHeader 
        author={post.author}
        date={date}
      />
      <PostContent>
        {content}
      </PostContent>
      <PostFooter 
        comments={comments}
        likes={likes}
      />
    </article>
  );
};

export default Post;