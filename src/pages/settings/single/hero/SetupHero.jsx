import { faBriefcase, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SetupHero = () => {
  return (
    <form className="hero-setup">
      <fieldset className="hero-display">
        <legend>Hero</legend>
        <div className="form-group">
          <label>Hero Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBriefcase} />
            <input type="text" name="heroTitle" placeholder="Hero Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Hero Details</label>
          <div className="input">
            <textarea name="heroDetails" placeholder="Hero Details" />
          </div>
        </div>
      </fieldset>
      <fieldset className="left-link">
        <legend>Left Link</legend>
        <div className="form-group">
          <label>Left Link Title</label>
          <div className="input">
            <input type="text" name="leftLinkTitle" placeholder="Left Link Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Left Link</label>
          <div className="input">
            <input type="text" name="leftLink" placeholder="Left Link" />
          </div>
        </div>
      </fieldset>
      <fieldset className="right-link">
        <legend>Right Link</legend>
        <div className="form-group">
          <label>Right Link Title</label>
          <div className="input">
            <input type="text" name="rightLinkTitle" placeholder="Right Link Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Right Link</label>
          <div className="input">
            <input type="text" name="rightLink" placeholder="Right Link" />
          </div>
        </div>
      </fieldset>
      <fieldset className="center-link">
        <legend>Center Link</legend>
        <div className="form-group">
          <label>Center Link Title</label>
          <div className="input">
            <input type="text" name="centerLinkTitle" placeholder="Center Link Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Center Link</label>
          <div className="input">
            <input type="text" name="centerLink" placeholder="Center Link" />
          </div>
        </div>
      </fieldset>
      <div className="actions">
        <button className="submit">
          <FontAwesomeIcon icon={faRotate} />
          <span className="title">Update Hero</span>
        </button>
      </div>
    </form>
  );
};

export default SetupHero;
