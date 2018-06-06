import React from 'react';
import PropTypes from 'prop-types';

const BackToAllReviews = ({ handleBacktoAllReviewsClick, currentReviewsLength, searchedWord }) => (
  <div className="backToReviewsContainer">
    <div className="mentions">{currentReviewsLength} guests have mentioned <span className="searchBold">{searchedWord}</span></div>
    <button className="backToAllReviews" onClick={handleBacktoAllReviewsClick}>Back to all reviews</button>
    <div className="border">
      <div className="innerBoarder" />
    </div>
  </div>
);

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
  currentReviewsLength: PropTypes.number.isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default BackToAllReviews;
