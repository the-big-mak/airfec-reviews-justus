import React from 'react';
import ReviewText from './reviewText.jsx';

const Review = ({review}) => (
  <div className="review">
    <img src="https://s3-us-west-1.amazonaws.com/guestpics/1Spy3bu.jpg" />
    <div>{review.guest_name}</div>
    <div>{review.date}</div>
    <div><ReviewText reviewText={review.review_text} /></div>
    <div>{review.host_name}</div>
  </div>
);

export default Review;

//2Sr6Max.jpg