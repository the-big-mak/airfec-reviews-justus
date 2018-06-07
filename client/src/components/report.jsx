import React from 'react';
import PropTypes from 'prop-types';
import svg from './svg';
import styles from './styles/report.css';

const Report = ({
  handleOutsideClick,
  handleClose,
  handleSubmitClick,
  setWrapperRef,
  handleLabelClick,
  buttonState,
}) => (
  <div onClick={handleOutsideClick} className={styles.reportContainer}>
    <div className={styles.reportBackground}>
      <div className={styles.reportPadding}>
        <div ref={setWrapperRef} className={styles.reportMain}>
          <button className={styles.close} onClick={handleClose}>
            {svg.close}
          </button>
          <div className={styles.reportTitle}>Do you want to anonymously report this review?</div>
          <div className={styles.chooseFollowing}>If so, please choose one of the following reasons.
            <button className={styles.readMore}>  Learn more</button>
          </div>
          <div className={styles.reportContent}>
            <div className={styles.labelContainer}>
              <label htmlFor="inappropriate" onClick={handleLabelClick}>
                <input id="inappropriate" className={styles.radioButton} type="radio" name="review_flags" value="Inappropriate content" />
                <div className={styles.labelTitle}>Inappropriate content</div>
                <div className={styles.labelContent}>This review contains violent, graphic, promotional, or otherwise offensive content.</div>
              </label>
            </div>
            <div className={styles.labelContainer}>
              <label htmlFor="dishonest" onClick={handleLabelClick}>
                <input id="dishonest" className={styles.radioButton} type="radio" name="review_flags" value="Dishonest or hateful content" />
                <div className={styles.labelTitle}>Dishonest or hateful content</div>
                <div className={styles.labelContent}>This review is purposefully malicious and assaulting.</div>
              </label>
            </div>
            <div className={styles.labelContainer}>
              <label htmlFor="fake" onClick={handleLabelClick}>
                <input id="fake" className={styles.radioButton} type="radio" name="review_flags" value="Fake content" />
                <div className={styles.labelTitle}>Fake content</div>
                <div className={styles.labelContent}>This review contains false information or may be fake.</div>
              </label>
            </div>
          </div>
          <button onClick={handleSubmitClick} id={styles.submitReport} disabled={buttonState}>Submit</button>
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
