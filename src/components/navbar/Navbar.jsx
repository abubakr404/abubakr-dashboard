import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faMessage,
  faRightFromBracket,
  faCircleUser,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/images/avatar.webp";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { dispatch } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="input search">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="items">
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
            <FontAwesomeIcon icon={faCircleHalfStroke} />
            <span className="title">Toggle Theme</span>
          </div>
          {/* <div className="item">
            <FontAwesomeIcon icon={faBell} />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faMessage} />
            <div className="counter">2</div>
          </div> */}
          <div className="item">
            <div className="info" onClick={() => setDropdown((prev) => !prev)}>
              <img src={avatar} alt="user-avatar" className="avatar" />
              <h4>Abubakr Hisham</h4>
            </div>
            <div className={dropdown ? "dropdown active" : "dropdown"}>
              <ul className="options-list">
                <li>
                  <Link to="profile">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span>logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
