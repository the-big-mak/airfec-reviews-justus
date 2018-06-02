import React from 'react';

const Review = ({review}) => (
  <div className="review">
    <div>{review.guest_name}</div>
    <div>{review.date}</div>
    <div>{review.review_text}</div>
    <div>{review.host_name}</div>
  </div>
);

export default Review;