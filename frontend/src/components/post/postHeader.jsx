import { Link } from 'react-router-dom'

import postIcon from '../../assets/sticky-notes.png';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';

import '../../styles/post/post-header.css';

const PostHeader = ({ author, date }) => {
  return (
    <div className="post-header">
      <div className="post-header__image">
        <img src={author.profilePicture ? author.profilePicture : avatarPlaceholder} alt="" />
      </div>
      <div className="post-header__content">
        <img src={postIcon} alt="post icon" className="post-header__icon"></img>
        <h3 className="post-header__title"><Link to={''} className="post-header__user">{author.name}</Link> posted.</h3>
        <h5 className="post-header__time">{date}</h5>
      </div>
    </div>
  );
}

export default PostHeader;