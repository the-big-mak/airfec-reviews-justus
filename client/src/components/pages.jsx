import React from 'react';
import PropType from 'prop-types';
import Page from './page';

const Pages = (props) => {
  if (props.currentPage === 0) {
    return (
      <div>
        <button value={1} onClick={props.handlePageClick}>1</button>
        <div>
          {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
        </div>
        <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
        <button onClick={props.handleNextClick}>Next</button>
      </div>
    );
  } else if (props.currentPage === Math.floor(props.numberOfReviews)) {
    return (
      <div>
        <button onClick={props.handlePrevClick}>Prev</button>
        <button value={1} onClick={props.handlePageClick}>1</button>
        <div>
          {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
        </div>
        <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={props.handlePrevClick}>Prev</button>
      <button value={1} onClick={props.handlePageClick}>1</button>
      <div>
        {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
      </div>
      <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
      <button onClick={props.handleNextClick}>Next</button>
    </div>
  );
};

Pages.propTypes = {
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
  handlePageClick: PropType.func.isRequired,
  numberOfPages: PropType.arrayOf(PropType.number).isRequired,
  currentPage: PropType.number.isRequired,
};

export default Pages;
