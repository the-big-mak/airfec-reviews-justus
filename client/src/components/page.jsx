import React from 'react';
import PropType from 'prop-types';

const Page = ({ page, handlePageClick }) => (
  <button onClick={handlePageClick} value={page}>{page}</button>
);

Page.propTypes = {
  page: PropType.number.isRequired,
  handlePageClick: PropType.func.isRequired,
};

export default Page;
