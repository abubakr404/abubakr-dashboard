import avatar from "../../../../assets/images/avatar.webp";
import { faBriefcase, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SetupAbout = () => {
  return (
    <form className="about-setup">
      <fieldset className="Bio">
        <legend>Bio</legend>
        <div className="form-group">
          <label>Bio Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBriefcase} />
            <input type="text" name="bioTitle" placeholder="Bio Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Bio Details</label>
          <div className="input">
            <textarea name="bioDetails" placeholder="Bio Details" />
          </div>
        </div>
      </fieldset>
      <fieldset className="about-image">
        <legend>About Image</legend>
        <div className="form-group">
          <label htmlFor="about">
            <input type="file" name="aboutImg" id="about" />
            <img src={avatar} name="aboutImage" />
          </label>
        </div>
      </fieldset>
      <div className="actions">
        <button className="submit">
          <FontAwesomeIcon icon={faRotate} />
          <span className="title">Update About</span>
        </button>
      </div>
    </form>
  );
};

export default SetupAbout;
