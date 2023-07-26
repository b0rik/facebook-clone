import Button from '../button';

import '../../styles/post/post-form.css';

const PostForm = () => {
  return (
    <form action="" className="post-form">
      <textarea type="text" placeholder="Enter your thoughts..." rows="5" className="post-form__input-field" />
      <Button text="post" />
    </form>
  );
};

export default PostForm;