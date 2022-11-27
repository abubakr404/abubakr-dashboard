import { NavLink, Outlet } from "react-router-dom";
import Table from "../../../components/table/table";

const List = () => {
  const massagesData = [
    {
      id: 1,
      name: "title",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 2,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 3,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 5,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
    {
      id: 6,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      actions: ["edit", "delete"],
    },
  ];
  return (
    <div className="setting-container">
      <ul className="setting-menu">
          <li>
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="hero"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Hero
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
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
