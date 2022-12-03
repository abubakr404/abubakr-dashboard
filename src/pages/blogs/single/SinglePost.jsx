import avatar from "../../../assets/images/avatar.webp";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <section className="content single-post">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <article className="post">
          <div className="article-title">
            <h2 className="title">Best framework react vs vuejs</h2>
            <i className="date">12/1/2022</i>
          </div>
          <div className="article-details">
            <div className="post-image">
              <img src={avatar} alt="" />
            </div>
            <p className="post">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis
              consequatur sit, similique blanditiis dolor, at laudantium suscipit facere
              vitae obcaecati, saepe adipisci accusantium reprehenderit voluptate iusto
              dicta quae placeat!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Single;
