import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faEnvelope,
  faUsers,
  faFolder,
  faRss,
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="" className="logo" />
        <span>Abubakr</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <FontAwesomeIcon icon={faGauge} />
            <span>Dashboard</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} />
            <span>Clients</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Messages</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFolder} />
            <span>Projects</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRss} />
            <span>Blogs</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleUser} />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">options</div>
    </div>
  );
};

export default Sidebar;
