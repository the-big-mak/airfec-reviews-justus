import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Rating = ({ rating }) => (
  <div className="ratingColumnA1">
    <div className="ratingColumnA2">
      <div className="words">{rating[1]}
        <span className="star"> <StarRatings
          rating={rating[0]}
          starDimension="18px"
          starSpacing="2px"
          starRatedColor="#008489"
        />
        </span>
      </div>
    </div>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Rating;
