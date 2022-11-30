import avatar from "../../../assets/images/avatar.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faPalette,
  faLink,
  faEye,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGithub,
  faGulp,
  faHtml5,
  faJsSquare,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const New = () => {
  return (
    <section className="content new-project">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <form className="project-form">
          <fieldset className="basic">
            <legend>Basic Information</legend>
            <div className="form-group">
              <label>Project Name</label>
              <div className="input">
                <FontAwesomeIcon icon={faBriefcase} />
                <input type="text" name="projectName" placeholder="Project Name" />
              </div>
            </div>
            <div className="form-group">
              <label>Project Desinger</label>
              <div className="input">
                <FontAwesomeIcon icon={faPalette} />
                <input
                  type="text"
                  name="projectDesinger"
                  placeholder="Project Desinger"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Desinger Link</label>
              <div className="input">
                <FontAwesomeIcon icon={faLink} />
                <input type="text" name="desingerLink" placeholder="Desinger Link" />
              </div>
            </div>
            <div className="form-group">
              <label>Project Repository</label>
              <div className="input">
                <FontAwesomeIcon icon={faGithub} />
                <input type="text" name="ProjectRepo" placeholder="Code Link" />
              </div>
            </div>
            <div className="form-group">
              <label>Live Link</label>
              <div className="input">
                <FontAwesomeIcon icon={faEye} />
                <input type="text" name="liveLink" placeholder="Project Live Link" />
              </div>
            </div>
          </fieldset>
          <fieldset className="technologies">
            <legend>Project Technologies</legend>
            <ul>
              <li className="form-group">
                <label htmlFor="html5">
                  <div className="box">
                    <input type="checkbox" id="html5" value="fab fa-html5" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faHtml5} />
                    <span className="title">html5</span>
                  </div>
                </label>
              </li>
              <li className="form-group">
                <label htmlFor="css3">
                  <div className="box">
                    <input type="checkbox" id="css3" value="fab fa-css3-alt" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <span className="title">css3</span>
                  </div>
                </label>
              </li>
              <li className="form-group">
                <label htmlFor="javascript">
                  <div className="box">
                    <input type="checkbox" id="javascript" value="fab fa-js-square" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faJsSquare} />
                    <span className="title">javascript</span>
                  </div>
                </label>
              </li>
              <li className="form-group">
                <label htmlFor="sass">
                  <div className="box">
                    <input type="checkbox" id="sass" value="fab fa-sass" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faSass} />
                    <span className="title">sass</span>
                  </div>
                </label>
              </li>
              <li className="form-group">
                <label htmlFor="gulp">
                  <div className="box">
                    <input type="checkbox" id="gulp" value="fab fa-gulp" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faGulp} />
                    <span className="title">gulp</span>
                  </div>
                </label>
              </li>
              <li className="form-group">
                <label htmlFor="vuejs">
                  <div className="box">
                    <input type="checkbox" id="vuejs" value="fab fa-vuejs" />
                  </div>
                  <div className="lable">
                    <FontAwesomeIcon icon={faVuejs} />
                    <span className="title">vuejs</span>
                  </div>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset className="images">
            <legend>Project Images</legend>
            <label htmlFor="desktopImg" className="form-group">
              <input type="file" name="desktopImg" id="desktopImg" />
              <img src={avatar} name="desktopImage" />
            </label>
            <label htmlFor="tabletImg" className="form-group">
              <input type="file" name="tabletImg" id="tabletImg" />
              <img src={avatar} name="tabletImage" />
            </label>
            <label htmlFor="mobileImg" className="form-group">
              <input type="file" name="mobileImg" id="mobileImg" />
              <img src={avatar} name="mobileImage" />
            </label>
          </fieldset>
          <div className="actions">
            <button className="submit">
              <FontAwesomeIcon icon={faPlus} />
              <span className="title">Add Project</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default New;
