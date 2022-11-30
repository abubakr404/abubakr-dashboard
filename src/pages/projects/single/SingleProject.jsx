import avatar from "../../../assets/images/avatar.webp";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faLink,
  faEye,
  faBriefcase,
  faUserTag,
  faUserEdit,
  faGears,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
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

const Single = () => {
  const { projectId } = useParams();
  const [shuffile, setShuffile] = useState("desktop");
  const projectData = [
    {
      id: 1,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
    {
      id: 2,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
    {
      id: 3,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
    {
      id: 4,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
    {
      id: 5,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
    {
      id: 6,
      projectName: "ahmed website",
      projectOwner: "Ahmed Hassan",
      projectDesigner: "abubakr",
      technologies: [faCss3Alt, faGulp, faHtml5, faJsSquare, faSass, faVuejs],
      links: [
        { title: "Live", link: "#", icon: faEye },
        { title: "desing", link: "#", icon: faPalette },
        { title: "code", link: "#", icon: faGithub },
      ],
      images: [
        { device: "desktop", icon: faDesktop, imgLink: avatar },
        { device: "tablet", icon: faTabletAlt, imgLink: avatar },
        { device: "mobile", icon: faMobileAlt, imgLink: avatar },
      ],
    },
  ];
  let project = projectData.find((proj) => proj.id === +projectId);
  return (
    <section className="content single-project">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <div className="project">
          <div className="info">
            <ul>
              <li>
                <p>
                  <FontAwesomeIcon icon={faBriefcase} fixedWidth />
                  Name:
                </p>
                <h4>{project.projectName}</h4>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faUserTag} fixedWidth />
                  Owner:
                </p>
                <h4>{project.projectOwner}</h4>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faUserEdit} fixedWidth />
                  Designer:
                </p>
                <h4>{project.projectDesigner}</h4>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faGears} fixedWidth />
                  Technologies:
                </p>
                <ul>
                  {project.technologies.map((technology, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={technology} />
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <p>
                  <FontAwesomeIcon icon={faLink} />
                  Links:
                </p>
                <ul>
                  {project.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.link}>
                        <FontAwesomeIcon icon={link.icon} />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="project-images">
            <div className="shuffile">
              {project.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setShuffile(image.device)}
                  className={shuffile === image.device ? "button active" : undefined}
                >
                  <FontAwesomeIcon icon={image.icon} />
                  {image.device}
                </button>
              ))}
            </div>
            <div className="images-container">
              {project.images.map((image, i) => 
                shuffile === image.device && <img key={i} src={image.imgLink} alt="" name={image.device} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
