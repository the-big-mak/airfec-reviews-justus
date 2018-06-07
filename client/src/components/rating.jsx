import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import styles from './styles/rating.css';

const Rating = ({ rating }) => (
  <div className={styles.ratingColumnA1}>
    <div className={styles.ratingColumnA2}>
      <div className={styles.words}>{rating[1]}
        <span className={styles.star}> <StarRatings
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
