import avatar from "../../../assets/images/avatar.webp";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <section className="single">
      <div className="list-container">
        <Link to="..">back</Link>
        <div className="customer">
          <img src={avatar} alt="" className="avatar" />
          <div className="info">
            <div className="name">ahmed ali</div>
            <div className="email">ahemd@gmail.com</div>
          </div>
        </div>
        <div className="messages-container">
          <div className="message">
            <span className="text">kdljsldkjkdsljkdsklfjlsdkfjdskajsdklfjaskj</span>
            <span className="date">8:30PM 10/2/2022</span>
          </div>
          <div className="message">
            <span className="text">kdljsldkjkdsljkdsklfjlsdkfjdskajsdklfjaskj</span>
            <span className="date">8:30PM 10/2/2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
