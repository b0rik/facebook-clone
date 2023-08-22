import { useState } from 'react';
import { useAddNewPostMutation } from '../../utils/state/apiSlice';

import Button from '../button';

import '../../styles/post/post-form.css';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [addNewPost, { isLoading }] = useAddNewPostMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    if (content !== '' && !isLoading) {
      try {
        await addNewPost({ content });
      } catch (err) {
        console.log('Failed to save post. error: ', err);
      }
    }
    
    setContent('');
  }

  return (
    <form action="" className="post-form">
      <textarea value={content} onChange={e => {setContent(e.target.value)}} type="text" placeholder="Enter your thoughts..." rows="5" className="post-form__input-field" />
      <Button onClick={handleSubmit} text="post" />
    </form>
  );
};

export default PostForm;