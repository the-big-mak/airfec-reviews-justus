import React from 'react';
import Popup from 'reactjs-popup';
import ReportThankyou from './reportThankyou';

const Report = () => (
  <Popup trigger={<button>report</button>} position="right center">

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

