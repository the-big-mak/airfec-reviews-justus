import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import svg from './svg';

const Search = ({
  handleSearchTextChange,
  handleKeyPress,
  totalRating,
  totalReviews,
  searchText,
}) => (
  <div>
    <div className="totalReviews">
      <div className="totalReviews1">
        <div className="totalReviews2">
          <div className="totalReviewsWords">{totalReviews} Reviews <span className="totalReviewStars"><StarRatings
            rating={totalRating}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
          /></span>
          </div>
        </div>
      </div>
    </div>
    <div className="searchContainer">
      <div className="searchContainer1">
        <div className="searchContainer2">
          <div className="searchContainer3">
            <div className="searchContainer4">
              <div className="searchContainer5">
                <div className="searchImage">
                  <div className="searchImage1">
                    {svg.search}
                  </div>
                </div>
                <div className="searchContainer6">
                  <input
                    className="searchInput"
                    type="search"
                    value={searchText}
                    placeholder="Search reviews"
                    onChange={handleSearchTextChange}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="boarder">
      <div className="innerBoarder" />
    </div>
  </div>
);

Search.propTypes = {
  handleSearchTextChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  totalRating: PropTypes.number,
  totalReviews: PropTypes.number,
  searchText: PropTypes.string.isRequired,
};

Search.defaultProps = {
  totalRating: 0,
  totalReviews: 0,
};

export default Search;
