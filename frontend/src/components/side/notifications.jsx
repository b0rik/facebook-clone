import SideTitle from './sideTitle';
import SideInfo from './sideInfo';

import '../../styles/side/notifications.css';

const Notifications = ({ children }) => {
  return (
    <div className="notifications">
      <SideTitle>Notifications</SideTitle>
      <SideInfo>notification</SideInfo>
      <SideInfo>notification</SideInfo>
    </div>

  );
};

export default Notifications;