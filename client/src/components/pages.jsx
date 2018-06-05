import React from 'react';
import PropType from 'prop-types';
import Page from './page';

const Pages = (props) => {
  if (props.currentPage === 0) {
    return (
      <div>
        <div>
          {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
        </div>
        <button onClick={props.handleNextClick}>Next</button>
      </div>
    );
  } else if (props.currentPage === props.numberOfPages[props.numberOfPages.length - 2]) {
    return (
      <div>
        <button onClick={props.handlePrevClick}>Prev</button>
        <div>
          {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
        </div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={props.handlePrevClick}>Prev</button>
      <div>
        {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
      </div>
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
