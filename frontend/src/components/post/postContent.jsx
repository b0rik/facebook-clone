import '../../styles/post/post-content.css'

const PostContent = ({ children }) => {
  return (
    <div className="post-content">
      <p className="post-content__text">
        {children}
      </p>
    </div>
  );
}

export default PostContent;