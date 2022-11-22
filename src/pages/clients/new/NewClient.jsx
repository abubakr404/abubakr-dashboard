import avatar from "../../../assets/images/avatar.webp";

const New = () => {
  return (
    <section className="new">
      <div className="list-container">
        <form className="client-card">
          <div className="info">
            <img src={avatar} alt="" />
            <input type="text" name="name" placeholder="Client Name" />
          </div>
          <div className="contact">
            <input type="email" name="email" placeholder="Email address" />
            <input type="text" name="phone" placeholder="Phone number" />
          </div>
          <div className="actions">
            <span className="add">Add Client</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default New;
