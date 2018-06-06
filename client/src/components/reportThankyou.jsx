import React from 'react';
import PropTypes from 'prop-types';

const ReportThankyou = ({ handleClose }) => (
  <div className="tyContainer">
    <div className="tyContainer1">
      <div className="tyPadding">
        <div className="reportThankyou">
          <div className="tyPadding1">
            <div className="tyCloseContainer">
              <button className="thankyouClose" onClick={handleClose}>
                <svg width="64" viewBox="0 0 64 64" className="close" enableBackground="new 0 0 64 64">
    <g>
      <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
    </g>
  </svg>
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

export default ReportThankyou;
