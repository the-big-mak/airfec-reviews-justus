import React from 'react';
import PropType from 'prop-types';

const Page = ({ page }) => (
  <button>{page}</button>
);

Page.propType = {
  page: PropType.number.isRequired,
};

export default Page;
