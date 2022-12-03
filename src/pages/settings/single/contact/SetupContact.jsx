import {
  faArrowRotateBack,
  faBriefcase,
  faEnvelope,
  faPaperPlane,
  faPhone,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SetupContact = () => {
  return (
    <form className="contact-setup">
      <fieldset className="contact-into">
        <legend>Contact</legend>
        <div className="form-group">
          <label>Contact Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBriefcase} />
            <input type="text" name="contactTitle" placeholder="Contact Title" />
          </div>
        </div>
        <div className="form-group">
          <label>Contact Info</label>
          <div className="input">
            <textarea name="contactInfo" placeholder="Contact Info" />
          </div>
        </div>
        <div className="form-group">
          <label>Message of Thanks</label>
          <div className="input">
            <textarea name="messageOfThanks" placeholder="Message of Thanks" />
          </div>
        </div>
      </fieldset>
      <fieldset className="contact-links">
        <legend>Contact Links</legend>
        <div className="form-group">
          <label>Email Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="text" name="emailLink" placeholder="Email Link" />
          </div>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <div className="input">
            <FontAwesomeIcon icon={faPhone} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" />
          </div>
        </div>
      </fieldset>
      <fieldset className="contact-buttons">
        <legend>Contact Buttons</legend>
        <div className="form-group">
          <label>Send Button Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faPaperPlane} />
            <input type="text" name="SendButton" placeholder="Send Button Title" />
          </div>
        </div>
        <div className="form-group">
          <label>SendAgain Button Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faArrowRotateBack} />
            <input
              type="text"
              name="SendAgainButton"
              placeholder="SendAgain Button Title"
            />
          </div>
        </div>
      </fieldset>
      <div className="actions">
        <button className="submit">
          <FontAwesomeIcon icon={faRotate} />
          <span className="title">Update Contact</span>
        </button>
      </div>
    </form>
  );
};

export default SetupContact;
