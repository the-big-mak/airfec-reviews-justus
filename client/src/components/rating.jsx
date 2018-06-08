import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/rating.css';

const Rating = ({ rating, displayStarRatings }) => (
  <div className={styles.ratingContainer}>
    <div className={styles.words}>{rating[1]}
      <div className={styles.star}>{displayStarRatings(rating[0]).map(star => star)}</div>
    </div>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.arrayOf([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  displayStarRatings: PropTypes.func.isRequired,
};

export default Rating;
