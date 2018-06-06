import React from 'react';
import PropTypes from 'prop-types';
import svg from './svg';

const ReportThankyou = ({ handleClose, setWrapperRef, handleOutsideClick }) => (
  <div onClick={handleOutsideClick} className="tyContainer">
    <div className="tyContainer1">
      <div className="tyPadding">
        <div ref={setWrapperRef} className="reportThankyou">
          <div className="tyPadding1">
            <div className="tyCloseContainer">
              <button className="thankyouClose" onClick={handleClose}>
                {svg.close}
              </button>
            </div>
            <div className="thankyou">Thank You</div>
            <div className="thankyouText">These reports help make Airbnb better for everyone, so we take them seriously. We'll reach out if we have any questions about your report.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReportThankyou.propTypes = {
  handleOutsideClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setWrapperRef: PropTypes.func.isRequired,
};

export default ReportThankyou;
