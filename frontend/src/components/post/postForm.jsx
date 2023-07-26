import '../../styles/post/post-form.css';

const PostForm = () => {
  return (
    <form action="" className="post-form">
      <textarea type="text" placeholder="Enter your thoughts..." rows="5" className="post-form__input-field" />
      <button id="post_form_submit" className="post-form__button">Post</button>
    </form>
  );
};

export default PostForm;