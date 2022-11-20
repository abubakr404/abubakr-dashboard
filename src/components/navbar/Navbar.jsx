import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faMoon,
  faMessage,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/images/avatar.webp";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="items">
          <div className="item">
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faBell} />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faMessage} />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img src={avatar} alt="user-avatar" className="avatar" />
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
