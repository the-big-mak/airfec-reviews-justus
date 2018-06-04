import React from 'react';
import PropTypes from 'prop-types';
import ReviewText from './reviewText';
import Report from './report';
import HostResponse from './hostResponse';

class Review extends React.Component {
  render() {
    const month = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    const {
      review,
    } = this.props;

    const date = review.date.split('/');
    const formatedDate = `${month[date[1]]} ${date[0]}`;
    const hostResponse = review.id % 10 ? '' : <HostResponse date={formatedDate} hostResponse={review} />;

    return (
      <div className="review">
        <img className="guestPhoto" src="2RTqR9s.jpg" alt="" />
        <div className="report"><Report /></div>
        <div className="reviewHeader">
          <div className="guestName">{review.guest_name}</div>
          <div className="date">{formatedDate}</div>
        </div>
        <div className="reviewText"><ReviewText reviewText={review.review_text} /></div>
        <div className="hostResponse">{hostResponse}</div>
        <div className="bottomSpace">
          <div className="bottomBorder" />
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default Review;
