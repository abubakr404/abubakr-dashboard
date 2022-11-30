import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGulp,
  faHtml5,
  faJsSquare,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import Table from "../../../components/table/table";

const List = () => {
  const projectData = [
    {
      id: 1,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
      id: 5,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
      id: 6,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [
        <span key={1} className="technology">
          <FontAwesomeIcon icon={faCss3Alt} />
        </span>,
        <span key={2} className="technology">
          <FontAwesomeIcon icon={faGulp} />
        </span>,
        <span key={3} className="technology">
          <FontAwesomeIcon icon={faHtml5} />
        </span>,
        <span key={4} className="technology">
          <FontAwesomeIcon icon={faJsSquare} />
        </span>,
        <span key={5} className="technology">
          <FontAwesomeIcon icon={faSass} />
        </span>,
        <span key={6} className="technology">
          <FontAwesomeIcon icon={faVuejs} />
        </span>,
      ],
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
    <section className="content projects">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Latest Projects</h2>
          <Link to="new-project" className="link">
            New Project
          </Link>
        </div>
        <Table tableHeaders={Object.keys(projectData[0])} tableRows={projectData} />
      </div>
    </section>
  );
};

export default List;
