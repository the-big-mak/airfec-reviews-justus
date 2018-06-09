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
  handleSearchClose,
}) => {
  const showClose = searchText !== ''
    ? svg.searchClose
    : null;

  return (
    <div>
      <div className={styles.totalReviews}>
        <div className={styles.totalReviewsWords}>
          {totalReviews} Reviews
          <div className={styles.star}>
            {displayStarRatings(totalRating).map(star => star)}
          </div>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchContainer1}>
          <div className={styles.searchContainer2}>
            <input
              className={styles.searchInput}
              type="text"
              value={searchText}
              placeholder="Search reviews"
              onChange={handleSearchTextChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className={styles.close} onClick={handleSearchClose} role="button">
            {showClose}
          </div>
          {svg.search}
        </div>
      </div>
      <div className={styles.borders}>
        <div className={styles.innerBorder} />
      </div>
    </div>
  );
};

Search.propTypes = {
  handleSearchTextChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  totalRating: PropTypes.number,
  totalReviews: PropTypes.number,
  searchText: PropTypes.string.isRequired,
  displayStarRatings: PropTypes.func.isRequired,
  handleSearchClose: PropTypes.func.isRequired,
};

Search.defaultProps = {
  totalRating: 0,
  totalReviews: 0,
};

export default Search;
