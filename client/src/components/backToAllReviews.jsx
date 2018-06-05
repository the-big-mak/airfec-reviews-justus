import React from 'react';
import PropTypes from 'prop-types';

const BackToAllReviews = ({ handleBacktoAllReviewsClick, currentReviewsLength, searchedWord }) => (
  <div>
    <div>{currentReviewsLength} guests have mentioned "{searchedWord}"</div>
    <button onClick={handleBacktoAllReviewsClick}>Back to all reviews</button>
  </div>
);

export default BackToAllReviews;

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
  currentReviewsLength: PropTypes.number.isRequired,
  searchedWord: PropTypes.string.isRequired,
};
