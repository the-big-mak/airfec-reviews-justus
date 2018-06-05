import React from 'react';
import PropType from 'prop-types';
import Page from './page';

const Pages = props => (
  <div>
    <button onClick={props.handlePrevClick}>Prev</button>
    <div>
      {props.numberOfPages.map(page => <Page page={page} />)}
    </div>
    <button onClick={props.handleNextClick}>Next</button>
  </div>
);

Pages.propTypes = {
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
  numberOfPages: PropType.arrayOf(PropType.number).isRequired,
};

export default Pages;
