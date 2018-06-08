import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/backToAllReviews.css';

const BackToAllReviews = ({ handleBacktoAllReviewsClick, currentReviewsLength, searchedWord }) => {
  const s = '\u201c';
  const e = '\u201d';
  const escape = s  + searchedWord + e;
  return (
  <div className={styles.backToReviewsContainer}>
    <div className={styles.mentions}>{currentReviewsLength} guests have mentioned
      <span className={styles.searchBold}> {searchedWord}</span>
    </div>
    <button
      className={styles.backToAllReviews}
      onClick={handleBacktoAllReviewsClick}
    >
      Back to all reviews
    </button>
    <div className={styles.borders}>
      <div className={styles.innerBoarder} />
    </div>
  </div>
  );
};

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
  currentReviewsLength: PropTypes.number.isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default BackToAllReviews;
