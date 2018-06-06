import React from 'react';
import Popup from 'reactjs-popup';

const ReportThankyou = ({ handleClose }) => (
  <div className="tyContainer">
    <div className="tyContainer1">
      <div className="reportThankyou">
        <a className="thankyouClose" onClick={handleClose}>
          &times;
        </a>
        <div className="thankyou">Thank you</div>
        <div className="thankyouText">These reports help make Airbnb better for everyone, so we take them seriously. We'll reach out if we have any questions about your report.</div>
      </div>
    </div>
  </div>
);

export default ReportThankyou;
