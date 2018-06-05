import React from 'react';
import PropTypes from 'prop-types';

const BackToAllReviews = ({ handleBacktoAllReviewsClick }) => (
  <div>
    <button onClick={handleBacktoAllReviewsClick}>Back to all reviews</button>
  </div>
);

export default BackToAllReviews;

BackToAllReviews.propTypes = {
  handleBacktoAllReviewsClick: PropTypes.func.isRequired,
};
