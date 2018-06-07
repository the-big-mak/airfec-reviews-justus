import React from 'react';
import PropTypes from 'prop-types';
import Rating from './rating';

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
      <div className="ratings">
        <div className="subRatings">
          <div className="acc-com-cle">
            {accuracyCommunicationCleanliness.map(rating => <Rating rating={rating} key={rating} />)}
          </div>
          <div className="loc-che-val">
            {locationCheckinValue.map(rating => <Rating rating={rating} key={rating} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

RatingsList.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default RatingsList;
