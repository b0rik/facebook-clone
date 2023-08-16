import { useState } from 'react';
import { useAddCommentMutation } from '../../utils/state/apiSlice';

import Button from '../button';

import '../../styles/post/comment-form.css';

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState('');
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    if (content !== '' && !isLoading) {
      await addComment({ postId, content });
    }
    
    setContent('');
  }

  return (
    <form action="" className="comment-form">
      <textarea value={content} onChange={e => {setContent(e.target.value)}} type="text" placeholder="Enter your comment" rows="3" className="comment-form__input-field" />
      <Button onClick={handleSubmit} text="comment" />
    </form>
  );
};

export default CommentForm;