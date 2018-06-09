import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/backToAllReviews.css';

const BackToAllReviews = ({ handleBacktoAllReviewsClick, currentReviewsLength, searchedWord }) => (
  <div className={styles.backToReviewsContainer}>
    <div>
    <div className={styles.mentions}>
      {currentReviewsLength} guests have mentioned
    </div>
    <div className={styles.searchBold} dangerouslySetInnerHTML={{ __html: `"${searchedWord}"` }} />
    </div>
    <button
      className={styles.backToAllReviews}
      onClick={handleBacktoAllReviewsClick}
    >
      Back to all reviews
    </button>
    <div className={styles.borders}>
      <div className={styles.innerBorder} />
    </div>
  </div>
);

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
  currentReviewsLength: PropTypes.number.isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default BackToAllReviews;
