import { Link } from "react-router-dom";
import Table from "../../../components/table/table";

const List = () => {
  const blogsData = [
    {
      id: 1,
      title: "blogs test",
      details: <p className="post">this is test post</p>,
      date: "12/1/2022",
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 2,
      title: "blogs test",
      details: <p className="post">this is test post</p>,
      date: "12/1/2022",
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 3,
      title: "blogs test",
      details: <p className="post">this is test post</p>,
      date: "12/1/2022",
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
    {
      id: 4,
      title: "blogs test",
      details: <p className="post">this is test post</p>,
      date: "12/1/2022",
      get actions() {
        return (
          <div className="actions">
            <Link to={`${this.id}`} className="link inverse">
              view
            </Link>
            <button className="button danger">delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <section className="content single-message">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Posts List</h2>
          <Link to="new-post" className="link">
            New Post
          </Link>
        </div>
        <Table tableHeaders={Object.keys(blogsData[0])} tableRows={blogsData} />
      </div>
    </section>
  );
};

export default List;
