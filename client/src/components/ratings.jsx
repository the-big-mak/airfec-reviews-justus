import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Ratings = ({ ratings }) => (
  <div>
    <div className="subRatings">
      <div className="acc-com-cle">
        <div className="accuacy">Accuracy <StarRatings
          rating={ratings[1]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
        <div className="communication">Communication <StarRatings
          rating={ratings[2]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
        <div className="cleanliness">Cleanliness <StarRatings
          rating={ratings[3]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
      </div>
      <div className="loc-che-val">
        <div className="location">Location <StarRatings
          rating={ratings[4]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
        <div className="checkin">Checkin <StarRatings
          rating={ratings[5]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
        <div className="value">Value <StarRatings
          rating={ratings[6]}
          starDimension="20px"
          starSpacing="3px"
          starRatedColor="#008489"
        />
        </div>
      </div>
    </div>
  </div>
);

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Ratings;
