import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Ratings = ({ ratings }) => (
  <div className="ratings">
    <div className="subRatings">
      <div className="acc-com-cle">
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Accuracy <span className="star"><StarRatings
              rating={ratings[1]}
              starDimension="18px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Communication <span className="star"><StarRatings
              rating={ratings[2]}
              starDimension="18px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Cleanliness <span className="star"><StarRatings
              rating={ratings[3]}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="loc-che-val">
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Location <span className="star"><StarRatings
              rating={ratings[4]}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Checkin <span className="star"><StarRatings
              rating={ratings[5]}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
        <div className="ratingColumnA1">
          <div className="ratingColumnA2">
            <div className="words">Value <span className="star"><StarRatings
              rating={ratings[6]}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="#008489"
            /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Ratings;
