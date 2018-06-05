import React from 'react';
import PropTypes from 'prop-types';

const BackToAllReviews = ({ handleBacktoAllReviewsClick, currentReviewsLength, searchedWord }) => (
  <div>
    <div className="mentions">{currentReviewsLength} guests have mentioned "{searchedWord}"</div>
    <button className="backToAllReviews" onClick={handleBacktoAllReviewsClick}>Back to all reviews</button>
  </div>
);

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
  currentReviewsLength: PropTypes.number.isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default BackToAllReviews;
