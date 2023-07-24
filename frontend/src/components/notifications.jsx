import SideTitle from '../components/sideTitle';
import SideInfo from '../components/sideInfo';

import '../styles/notifications.css';

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