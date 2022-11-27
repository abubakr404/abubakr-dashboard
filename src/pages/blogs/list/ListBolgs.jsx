import { Link } from "react-router-dom";
import Table from "../../../components/table/table";

const List = () => {
  const massagesData = [
    {
      id: 1,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`}>
              <span className="view">view</span>
            </Link>
            <span className="delete">delete</span>
          </div>
        );
      },
    },
    {
      id: 2,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`}>
              <span className="view">view</span>
            </Link>
            <span className="delete">delete</span>
          </div>
        );
      },
    },
    {
      id: 3,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`}>
              <span className="view">view</span>
            </Link>
            <span className="delete">delete</span>
          </div>
        );
      },
    },
    {
      id: 4,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      messages: ["message 1", "message 2"],
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`}>
              <span className="view">view</span>
            </Link>
            <span className="delete">delete</span>
          </div>
        );
      },
    },
  ];
  return (
    <section className="list">
      <div className="list-container">
        <div className="top">
          <h2 className="list-title">Latest Posts</h2>
          <Link to="new-post">New Post</Link>
        </div>
        <Table tableHeaders={Object.keys(massagesData[0])} tableRows={massagesData} />
      </div>
    </section>
  );
};

export default List;
