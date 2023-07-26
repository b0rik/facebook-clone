import SideImage from "./sideImage";
import SideTitle from './sideTitle';
import SideInfo from './sideInfo';

import '../../styles/side/profile-info.css';

const ProfileInfo = ({ user }) => {
  return (
    <div className="profile-info">
      <SideImage image={'https://avatars.githubusercontent.com/u/3390766'} />
      <SideTitle>Information</SideTitle>
      <SideInfo>info</SideInfo>
      <SideInfo>info</SideInfo>
      <SideInfo>info</SideInfo>
      <SideInfo>info</SideInfo>
    </div>
  );
};

export default ProfileInfo;