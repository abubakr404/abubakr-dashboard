import { Link } from "react-router-dom";
import Table from "../../../components/table/table";

const List = () => {
  const massagesData = [
    {
      id: 1,
      projectName: "ahmed website",
      projectDesigner: "abubakr",
      projectOwner: "Ahmed Hassan",
      // liveLink: "a@a.com",
      // designerLink: "a@a.com",
      technologies: ["technology 1", "technology 2"],
      // desktopImg: "",
      // tabletImg: "",
      // phoneImg: "",
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
      projectName: "ahmed",
      projectDesigner: "Elzero",
      projectOwner: "Ahmed Hassan",
      // liveLink: "a@a.com",
      // designerLink: "a@a.com",
      technologies: ["technology 1", "technology 2"],
      // desktopImg: "",
      // tabletImg: "",
      // phoneImg: "",
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
      projectName: "ahmed",
      projectDesigner: "Forntend Monstr",
      projectOwner: "Ahmed Hassan",
      // liveLink: "a@a.com",
      // designerLink: "a@a.com",
      technologies: ["technology 1", "technology 2"],
      // desktopImg: "",
      // tabletImg: "",
      // phoneImg: "",
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
      projectName: "ahmed",
      projectDesigner: "Un Known",
      projectOwner: "Ahmed Hassan",
      // liveLink: "a@a.com",
      // designerLink: "a@a.com",
      technologies: ["technology 1", "technology 2"],
      // desktopImg: "",
      // tabletImg: "",
      // phoneImg: "",
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
      id: 5,
      projectName: "ahmed",
      projectDesigner: "Ali Ahmed",
      projectOwner: "Ahmed Hassan",
      // liveLink: "a@a.com",
      // designerLink: "a@a.com",
      technologies: ["technology 1", "technology 2"],
      // desktopImg: "",
      // tabletImg: "",
      // phoneImg: "",
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
          <h2 className="list-title">Latest Projects</h2>
          <Link to="new-project">
            <span className="new">New Project</span>
          </Link>
        </div>
        <Table tableHeaders={Object.keys(massagesData[0])} tableRows={massagesData} />
      </div>
    </section>
  );
};

export default List;
