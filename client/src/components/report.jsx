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
              <input id="inappropriateButton"className="radioButton" type="radio" name="review_flags" value="Inappropriate content" /><span className="inappropriateText"><span className="inappropriateTitle">Inappropriate content</span>
                <div className="inappropriateContent">This review contains violent, graphic, promotional, or otherwise offensive content.</div></span>
            </div>
            <input className="radioButton" type="radio" name="review_flags" value="Dishonest or hateful content" /><span className="inappropriateText"><span className="inappropriateTitle">Dishonest or hateful content</span>
              <div className="inappropriateContent">This review is purposefully malicious and assaulting.</div></span>
            <input className="radioButton" type="radio" name="review_flags" value="Fake content" /><span className="inappropriateText"><span className="inappropriateTitle">Fake content</span>
              <div className="inappropriateContent">This review contains false information or may be fake.</div></span>
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
