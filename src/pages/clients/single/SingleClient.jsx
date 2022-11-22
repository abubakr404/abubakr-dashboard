import { Link, useParams } from "react-router-dom";
import avatar from "../../../assets/images/avatar.webp";

const Single = () => {
  const { clientId } = useParams();

  const clientsData = [
    {
      id: 1,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 2,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 3,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 4,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 5,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 6,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 7,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 8,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 9,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 10,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 11,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
    {
      id: 12,
      name: "ahmed",
      email: "a@a.com",
      phone: "0904219999",
      img: avatar,
    },
  ];
  return (
    <section className="single">
      <div className="list-container">
        {clientsData.map(
          (client) =>
            client.id === +clientId && (
              <div className="client-card" key={client.id}>
                <div className="info">
                  <img src={avatar} alt="" />
                  <div className="name">{client.name}</div>
                </div>
                <div className="contact">
                  <span className="email">{client.email}</span>
                  <span className="phone">{client.phone}</span>
                </div>
                <div className="actions">
                  <Link to={`${client.id}`}>
                    <span className="view">view</span>
                  </Link>
                  <span className="delete">delete</span>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Single;