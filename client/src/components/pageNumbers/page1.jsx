import React from 'react';
import PropType from 'prop-types';

const Page1 = ({ handlePageClick, numberOfReviews, handleNextClick }) => (
  <div>
    <button className="currentPage" value={1} onClick={handlePageClick}>1</button>
    <button value={2} onClick={handlePageClick}>2</button>
    <button value={3} onClick={handlePageClick}>3</button>
    <div>...</div>
    <button value={Math.ceil(numberOfReviews)} onClick={handlePageClick}>{Math.ceil(numberOfReviews)}</button>
    <button onClick={handleNextClick}>Next</button>
  </div>
);

Page1.propTypes = {
  numberOfReviews: PropType.number.isRequired,
  handlePageClick: PropType.func.isRequired,
  handleNextClick: PropType.func.isRequired,
};

export default Page1;
