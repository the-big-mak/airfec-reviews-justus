import React from 'react';
import Review from './review.jsx';

const ReviewList = (props) => (
  <div id="reviewList">
    {props.reviews.map((review, i) =>
      <Review review={review} key={i} />
    )}
  </div>
);

export default ReviewList;
