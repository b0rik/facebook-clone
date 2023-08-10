import { useGetUserByIdQuery } from '../../utils/state/apiSlice';

import SideImage from "./sideImage";
import SideTitle from './sideTitle';
import SideInfo from './sideInfo';

import '../../styles/side/profile-info.css';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';

const ProfileInfo = ({ user }) => {
  const { name, profilePicture, dateOfBirth, joinDate } = user;

  return (
    <div className="profile-info">
      <SideImage image={!!profilePicture ? profilePicture : avatarPlaceholder} />
      <SideTitle>Information</SideTitle>
      <SideInfo>NAME: {name.slice(0, 1).toUpperCase() + name.slice(1)}</SideInfo>
      <SideInfo>BORN ON: {new Date(dateOfBirth).toLocaleDateString()}</SideInfo>
      <SideInfo>JOINED ON: {new Date(joinDate).toLocaleDateString()}</SideInfo>
    </div>
  );
};

export default ProfileInfo;