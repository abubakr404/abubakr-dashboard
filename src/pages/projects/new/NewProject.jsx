import avatar from "../../../assets/images/avatar.webp";

const New = () => {
  return (
    <section className="new-project">
      <div className="list-container">
        <h2 className="text-center special-head" title="works">
          works
        </h2>
        <form className="work-form">
          <input
            className="work-name"
            type="text"
            name="work-name"
            placeholder="Work name"
          />
          <input
            className="work-desinger"
            type="text"
            name="work-desinger"
            placeholder="work desinger"
          />
          <input
            className="work-desinger-link"
            type="text"
            name="work-desinger-link"
            placeholder="work desinger link"
          />
          <input
            className="work-code-link"
            type="text"
            name="work-code-link"
            placeholder="work code link"
          />
          <input
            className="work-live-link"
            type="text"
            name="work-live-link"
            placeholder="work live link"
          />
          <div className="technologies">
            <input
              className="technology"
              type="checkbox"
              id="html5"
              value="fab fa-html5"
            />
            <label htmlFor="html5">
              <i className="fab fa-html5"></i>
              <span>html5</span>
            </label>
            <input
              className="technology"
              type="checkbox"
              id="css3"
              value="fab fa-css3-alt"
            />
            <label htmlFor="css3">
              <i className="fab fa-css3-alt"></i>
              <span>css3</span>
            </label>
            <input
              className="technology"
              type="checkbox"
              id="javascript"
              value="fab fa-js-square"
            />
            <label htmlFor="javascript">
              <i className="fab fa-js-square"></i>
              <span>javascript</span>
            </label>
            <input className="technology" type="checkbox" id="sass" value="fab fa-sass" />
            <label htmlFor="sass">
              <i className="fab fa-sass"></i>
              <span>sass</span>
            </label>
            <input className="technology" type="checkbox" id="gulp" value="fab fa-gulp" />
            <label htmlFor="gulp">
              <i className="fab fa-gulp"></i>
              <span>gulp</span>
            </label>
            <input
              className="technology"
              type="checkbox"
              id="vuejs"
              value="fab fa-vuejs"
            />
            <label htmlFor="vuejs">
              <i className="fab fa-vuejs"></i>
              <span>vuejs</span>
            </label>
          </div>
          <div className="project-images fRowC">
            <input className="workImgRender" type="file" data-device="desktop" />
            <img className="workImgViewer" />
            <input className="workImgRender" type="file" data-device="tablet" />
            <img className="workImgViewer" />
            <input className="workImgRender" type="file" data-device="mobile" />
            <img className="workImgViewer" />
          </div>
          <button className="submit btn btn-primary" type="submit">
            <i className="fa fa-plus" aria-hidden="true"></i>Add Work
          </button>
        </form>
      </div>
    </section>
  );
};

export default New;
