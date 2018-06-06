import React from 'react';
import Popup from 'reactjs-popup';
import ReportThankyou from './reportThankyou';

const Report = () => (
  <Popup trigger={<button className="report"><svg className="flag" x="0px" y="0px"
  viewBox="0 0 60 60">
<path d="M51.371,3.146c-0.459-0.185-11.359-4.452-19.84,0.045C24.811,6.758,13.015,4.082,10,3.308V1c0-0.553-0.447-1-1-1
 S8,0.447,8,1v3c0,0.014,0.007,0.026,0.008,0.04C8.008,4.052,8,4.062,8,4.074V33v1.074V59c0,0.553,0.447,1,1,1s1-0.447,1-1V35.375
 c2.273,0.567,7.227,1.632,12.368,1.632c3.557,0,7.2-0.511,10.101-2.049c7.652-4.061,18.056,0.004,18.16,0.045
 c0.309,0.124,0.657,0.086,0.932-0.102C51.835,34.716,52,34.406,52,34.074v-30C52,3.665,51.751,3.298,51.371,3.146z M50,32.665
 c-3.26-1.038-11.646-3.096-18.469,0.525C24.812,36.756,13.02,34.082,10,33.308V33V5.375c3.853,0.961,15.381,3.343,22.469-0.417
 C39.035,1.475,47.627,3.973,50,4.777V32.665z"></path></svg></button>} position="right center">

    {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div>Do you want to anonymously report this review?</div>
        <div>If so, please choose one of the following reasons.<button className="readMore">Learn more</button></div>
        <input type="radio" name="review_flags" value="Inappropriate content" /><span>Inappropriate content</span>
        <div>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
        <input type="radio" name="review_flags" value="Dishonest or hateful content" /><span>Dishonest or hateful content</span>
        <div>This review is purposefully malicious and assaulting.</div>
        <input type="radio" name="review_flags" value="Fake content" /><span>Fake content</span>
        <div>This review contains false information or may be fake.</div>
        <div><ReportThankyou /></div>
      </div>
    )}
  </Popup>
);

export default Report;
