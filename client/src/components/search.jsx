import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const Search = props => (
  <div>
    <div className="totalReviews">
      <div className="totalReviewsWords">{props.totalReviews} Reviews <StarRatings
        rating={props.totalRating}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor="#008489"
      />
      </div>
    </div>
    <div className="searchContainer">
      <input
        className="searchBox"
        type="search"
        value={props.searchText}
        placeholder="Search reviews"
        onChange={props.handleSearchTextChange}
        onKeyPress={props.handleKeyPress}
      />
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
