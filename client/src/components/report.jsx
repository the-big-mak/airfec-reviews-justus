import React from 'react';
import PropTypes from 'prop-types';
import svg from './svg';

const Report = ({
  handleOutsideClick, handleClose, handleSubmitClick, setWrapperRef,
}) => (
  <div onClick={handleOutsideClick} className="reportContainer">
    <div className="reportBackground">
      <div className="reportPadding">
        <div ref={setWrapperRef} className="reportMain">
          <button className="close" onClick={handleClose}>
            {svg.close}
          </button>
          <div className="reportHeader">
            <div className="reportTitle">Do you want to anonymously report this review?</div>
          </div>
          <div className="chooseFollowing">If so, please choose one of the following reasons.<button className="readMore">Learn more</button></div>
          <div className="reportContent">
            <div className="inappropriate">
              <label htmlFor="inappropriate" className="inappropriateTitle">
                <input id="inappropriate" className="radioButton" type="radio" name="review_flags" value="Inappropriate content" />
                Inappropriate content
                <div className="inappropriateContent">This review contains violent, graphic, promotional, or otherwise offensive content.</div>
              </label>
            </div>
            <label htmlFor="dishonest" className="inappropriateTitle">
              <input id="dishonest" className="radioButton" type="radio" name="review_flags" value="Dishonest or hateful content" />
              Dishonest or hateful content
              <div className="inappropriateContent">This review is purposefully malicious and assaulting.</div>
            </label>
            <label htmlFor="fake" className="inappropriateTitle">
              <input id="fake" className="radioButton" type="radio" name="review_flags" value="Fake content" />
              Fake content
              <div className="inappropriateContent">This review contains false information or may be fake.</div>
            </label>
          </div>
          <button onClick={handleSubmitClick} className="submitReport">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

Report.propTypes = {
  handleOutsideClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Report;
