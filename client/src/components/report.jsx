import React from 'react';

const Report = ({ handleClose, handleSubmitClick}) => {
  return (
        <div className="reportContainer">
          <div className="reportBackground">
            <div className="reportPadding">
              <div className="reportMain">
                <button className="close" onClick={handleClose}>
                <svg width="64" viewBox="0 0 64 64" className="close" enableBackground="new 0 0 64 64">
    <g>
      <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
    </g>
  </svg>
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

  )
}


export default Report;
