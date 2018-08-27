import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/rating.css';

const Rating = ({ rating, displayStarRatings, id }) => (
  <div id="rating">
    <div className={styles.ratingContainer}>
      <div className={styles.words}>{rating[1]}
        <div className={styles.star}>
          {displayStarRatings(rating[0], id).map(star => <div className="stars">{ star }</div>)}
        </div>
      </div>
    </div>
  </div>
);

Rating.propTypes = {
  rating: PropTypes.node.isRequired,
  displayStarRatings: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rating;
