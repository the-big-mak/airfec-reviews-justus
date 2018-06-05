import React from 'react';
import PropType from 'prop-types';

const NextPage = props => (
  <div>
    <button onClick={props.handlePrevClick}>Prev</button>
    <button>1</button>
    <button>2</button>
    <button onClick={props.handleNextClick}>Next</button>
  </div>
);

NextPage.propTypes = {
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
};

export default NextPage;
