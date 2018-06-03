import React from 'react';
import ReviewText from './reviewText.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);
  }
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
    }
    const date1 = this.props.review.date.split('/');
    const formatedDate = `${month[date1[1]]} ${date1[0]}`;
    return (
      <div className="review">
        <img src="https://s3-us-west-1.amazonaws.com/guestpics/1Spy3bu.jpg" />
        <div>{this.props.review.guest_name}</div>
        <div>{formatedDate}</div>
        <div><ReviewText reviewText={this.props.review.review_text} /></div>
        <div>{this.props.review.host_name}</div>
      </div>
    );
  }
}

export default Review;

//2Sr6Max.jpg