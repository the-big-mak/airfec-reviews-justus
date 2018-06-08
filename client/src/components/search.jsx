import React from 'react';
import PropTypes from 'prop-types';
import svg from './svg';
import styles from './styles/search.css';

const Search = ({
  handleSearchTextChange,
  handleKeyPress,
  totalRating,
  totalReviews,
  searchText,
  displayStarRatings,
}) => (
  <div>
    <div className={styles.totalReviews}>
      <div className={styles.totalReviewsWords}>{totalReviews} Reviews
        <div className={styles.star}>{displayStarRatings(totalRating).map(star => star)}</div>
      </div>
    </div>
    <div className={styles.searchContainer}>
      <div className={styles.searchContainer1}>
        <div className={styles.searchContainer2}>
          <input
            className={styles.searchInput}
            type="search"
            value={searchText}
            placeholder="Search reviews"
            onChange={handleSearchTextChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        {svg.search}
      </div>
    </div>
    <div className={styles.borders}>
      <div className={styles.innerBorder} />
    </div>
  </div>
);

Search.propTypes = {
  handleSearchTextChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  totalRating: PropTypes.number,
  totalReviews: PropTypes.number,
  searchText: PropTypes.string.isRequired,
  displayStarRatings: PropTypes.func.isRequired,
};

Search.defaultProps = {
  totalRating: 0,
  totalReviews: 0,
};

export default Search;
