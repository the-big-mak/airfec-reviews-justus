import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';
import styles from './styles/ratingsList.css';

const RatingsList = ({ ratings }) => {
  const accuracyCommunicationCleanliness = [
    [ratings[0], 'Accuracy'],
    [ratings[1], 'Communication'],
    [ratings[2], 'Cleanliness'],
  ];
  const locationCheckinValue = [
    [ratings[3], 'Location'],
    [ratings[4], 'Checkin'],
    [ratings[5], 'Value'],
  ];
  return (
    <div>
      <div className={styles.ratings}>
        <div className={styles.accComCle}>
          {accuracyCommunicationCleanliness.map(rating => <Rating rating={rating} key={rating} />)}
        </div>
        <div className={styles.locCheVal}>
          {locationCheckinValue.map(rating => <Rating rating={rating} key={rating} />)}
        </div>
      </div>
    </div>
  );
};

RatingsList.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RatingsList;
