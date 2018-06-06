import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import svg from './svg';

const Search = props => (
  <div>
    <div className="totalReviews">
      <div className="totalReviews1">
        <div className="totalReviews2">
          <div className="totalReviewsWords">{props.totalReviews} Reviews <span className="totalReviewStars"><StarRatings
            rating={props.totalRating}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
            // svgIconPath="M9715 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z"
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
                    value={props.searchText}
                    placeholder="Search reviews"
                    onChange={props.handleSearchTextChange}
                    onKeyPress={props.handleKeyPress}
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
