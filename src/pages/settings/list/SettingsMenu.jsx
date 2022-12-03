import {
  faGears,
  faQuestion,
  faUserGroup,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
const List = () => {
  return (
    <div className="setting-container">
      <ul className="setting-menu">
        <li>
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FontAwesomeIcon icon={faGears} />
            <span className="title">General</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="hero"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FontAwesomeIcon icon={faWandMagicSparkles} />
            <span className="title">Hero</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FontAwesomeIcon icon={faQuestion} />
            <span className="title">About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <FontAwesomeIcon icon={faUserGroup} />
            <span className="title">Contact</span>
          </NavLink>
        </li>
      </ul>
      <div className="setup-side">
        <Outlet />
      </div>
    </div>
  );
};

export default List;
