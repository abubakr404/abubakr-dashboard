import avatar from "../../../../assets/images/avatar.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faRotate,
  faHeading,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const GeneralSetup = () => {
  return (
    <form className="general-setup">
      <fieldset className="social-links">
        <legend>Social Links</legend>
        <div className="form-group">
          <label>Facebook Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faFacebookF} />
            <input type="text" name="facebookLink" placeholder="Facebook Link" />
          </div>
        </div>
        <div className="form-group">
          <label>Facebook Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faTwitter} />
            <input type="text" name="twitterLink" placeholder="Twitter Link" />
          </div>
        </div>
        <div className="form-group">
          <label>Linkedin Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faLinkedin} />
            <input type="text" name="linkedinLink" placeholder="Linkedin Link" />
          </div>
        </div>
        <div className="form-group">
          <label>GitHub Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faGithub} />
            <input type="text" name="gitHubLink" placeholder="GitHub Link" />
          </div>
        </div>
        <div className="form-group">
          <label>CodePen Link</label>
          <div className="input">
            <FontAwesomeIcon icon={faCodepen} />
            <input type="text" name="codePenLink" placeholder="CodePen Link" />
          </div>
        </div>
      </fieldset>
      <fieldset className="logo">
        <legend>logo</legend>
        <div className="form-group">
          <label>Site Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faUserTie} />
            <input type="text" name="siteTitle" placeholder="Site Title" />
          </div>
        </div>
        <div className="form-group">
          <span>Logo Image</span>
          <div className="input">
            <label htmlFor="logo">
              <input type="file" name="logoImg" id="logo" />
              <img src={avatar} name="logoImage" />
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="section">
        <legend>Hero Section</legend>
        <div className="form-group">
          <label>Hero Navigator Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBookAtlas} />
            <input
              type="text"
              name="heroNavigatorTitle"
              placeholder="Hero Navigator Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Hero Heading Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faHeading} />
            <input type="text" name="heroHeadingTitle" placeholder="Hero Heading Title" />
          </div>
        </div>
      </fieldset>
      <fieldset className="section">
        <legend>About Section</legend>
        <div className="form-group">
          <label>About Navigator Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBookAtlas} />
            <input
              type="text"
              name="aboutNavigatorTitle"
              placeholder="About Navigator Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label>About Heading Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faHeading} />
            <input
              type="text"
              name="aboutHeadingTitle"
              placeholder="About Heading Title"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="section">
        <legend>Portfolio Section</legend>
        <div className="form-group">
          <label>Portfolio Navigator Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBookAtlas} />
            <input
              type="text"
              name="portfolioNavigatorTitle"
              placeholder="Portfolio Navigator Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Portfolio Heading Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faHeading} />
            <input
              type="text"
              name="portfolioHeadingTitle"
              placeholder="Portfolio Heading Title"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="section">
        <legend>Blogs Section</legend>
        <div className="form-group">
          <label>Blogs Navigator Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBookAtlas} />
            <input
              type="text"
              name="blogsNavigatorTitle"
              placeholder="Blogs Navigator Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Blogs Heading Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faHeading} />
            <input
              type="text"
              name="blogsHeadingTitle"
              placeholder="Blogs Heading Title"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="section">
        <legend>Contact Section</legend>
        <div className="form-group">
          <label>Contact Navigator Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faBookAtlas} />
            <input
              type="text"
              name="contactNavigatorTitle"
              placeholder="Contact Navigator Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Contact Heading Title</label>
          <div className="input">
            <FontAwesomeIcon icon={faHeading} />
            <input
              type="text"
              name="contactHeadingTitle"
              placeholder="Contact Heading Title"
            />
          </div>
        </div>
      </fieldset>
      <div className="actions">
        <button className="submit">
          <FontAwesomeIcon icon={faRotate} />
          <span className="title">Update Settings</span>
        </button>
      </div>
    </form>
  );
};

export default GeneralSetup;
