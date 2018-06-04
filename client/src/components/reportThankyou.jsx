import React from 'react';
import Popup from 'reactjs-popup';

const ReportThankyou = () => (
  <Popup trigger={<input className="submitReport" type="submit" value="submit" />} position="right center">

    {close => (
      <div className="reportThankyou">
        <a className="thankyouClose" onClick={close}>
          &times;
        </a>
        <div className="thankyou">Thank you</div>
        <div className="thankyouText">These reports help make Airbnb better for everyone, so we take them seriously. We'll reach out if we have any questions about your report.</div>
      </div>
    )}
  </Popup>
);

export default ReportThankyou;
