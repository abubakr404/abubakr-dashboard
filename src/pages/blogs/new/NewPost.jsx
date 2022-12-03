import avatar from "../../../assets/images/avatar.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const New = () => {
  return (
    <section className="content new-project">
      <div className="content-container">
        <div className="content-head">
          <Link to=".." className="link">
            back
          </Link>
        </div>
        <form className="post-form">
          <fieldset className="basic">
            <legend>Basic Information</legend>
            <div className="form-group">
              <label>Post Title</label>
              <div className="input">
                {/* <FontAwesomeIcon icon={faBriefcase} /> */}
                <input type="text" name="postTitle" placeholder="Post Title" />
              </div>
            </div>
            <div className="form-group">
              <label>Post Details</label>
              <div className="input">
                <textarea name="postDetails" placeholder="Post Details" />
              </div>
            </div>
          </fieldset>
          <fieldset className="images">
            <legend>Post Images</legend>
            <label htmlFor="postImg" className="form-group">
              <input type="file" name="postImg" id="postImg" />
              <img src={avatar} alt="" />
            </label>
          </fieldset>
          <div className="actions">
            <button className="submit">
              <FontAwesomeIcon icon={faPlus} />
              <span className="title">Add Post</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default New;
