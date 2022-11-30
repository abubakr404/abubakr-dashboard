import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
const List = () => {
  const clientsData = [
    {
      id: 1,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 2,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 3,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 4,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 5,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 6,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 7,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 8,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
    {
      id: 9,
      name: "ahmed",
      projectName: "Ahmed Hassan",
      img: avatar,
      conact: [
        { link: "mailto:a@a.com", icon: faMessage },
        { link: "#", icon: faFacebookF },
        { link: "#", icon: faTwitter },
        { link: "tel:+24990421999", icon: faPhone },
      ],
    },
  ];
  return (
    <section className="content clients">
      <div className="content-container">
        <div className="content-head">
          <h2 className="main-title">Clients List</h2>
          <Link to="new-client" className="link">
            New Client
          </Link>
        </div>
        <div className="clients-container">
          {clientsData.map((client) => (
            <div className="client-card" key={client.id}>
              <div className="avatar-container">
                <img src={client.img} alt="" />
              </div>
              <div className="info">
                <div className="name">{client.name}</div>
                <span className="title">{client.projectName}</span>
              </div>
              <ul className="contact">
                {client.conact.map((con, i) => (
                  <li key={i}>
                    <a className="social-link" href={con.link}>
                      <FontAwesomeIcon icon={con.icon} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="actions">
                <Link to={`${client.id}`} className="link inverse">
                  See More
                </Link>
                <button className="button danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
