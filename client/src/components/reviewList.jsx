import PropTypes from 'prop-types';
import React from 'react';
import Review from './review';

const ReviewList = ({ reviews, searchedWord }) => (
  <div>
    {reviews.map(review =>
      (<Review
        review={review}
        searchedWord={searchedWord}
        key={review.id}
      />))}
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default ReviewList;
