import React from 'react';
import PropType from 'prop-types';

const Page3 = ({ handlePageClick, numberOfReviews, handleNextClick, handlePrevClick }) => (
  <div>
    <button onClick={handlePrevClick}>Prev</button>
    <button value={1} onClick={handlePageClick}>1</button>
    <button value={2} onClick={handlePageClick}>2</button>
    <button className="currentPage" value={3} onClick={handlePageClick}>3</button>
    <button value={4} onClick={handlePageClick}>4</button>
    <div>...</div>
    <button value={Math.ceil(numberOfReviews)} onClick={handlePageClick}>{Math.ceil(numberOfReviews)}</button>
    <button onClick={handleNextClick}>Next</button>
  </div>
);

Page3.propTypes = {
  numberOfReviews: PropType.number.isRequired,
  handlePageClick: PropType.func.isRequired,
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
};

export default Page3;
