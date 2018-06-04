import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import Ratings from './ratings.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: 5,
      reviewData: [],
      ratings: [],
    };
  }

  componentDidMount() {
    this.getReviewData(this.handleReceivedReviewData.bind(this));
  }

  getReviewData(callback) {
    axios.get('/reviews', {
      params: {
        ID: this.state.roomId,
      },
    })
      .then((response) => {
        console.log('success got data', response.data);
        callback(response.data);
      })
      .catch(error => console.error('failed to get room data', error))
  }
  
  getAverageRating(reviewRatings, subclass) {
    let sum = 0;
    reviewRatings.forEach(review => {
      sum += review[subclass];
    })
    sum = sum/reviewRatings.length
    return Math.round(sum * 2)/2;
  }
  
  handleReceivedReviewData(data) {
    const accuracy = this.getAverageRating(data, 'accuracy_rating');
    const communication = this.getAverageRating(data, 'communication_rating');
    const cleanliness = this.getAverageRating(data, 'cleanliness_rating');
    const location = this.getAverageRating(data, 'location_rating');
    const checkin = this.getAverageRating(data, 'checkin_rating');
    const value = this.getAverageRating(data, 'value_rating');

    this.setState({
      reviewData: data,
      ratings: [accuracy, communication, cleanliness, location, checkin, value],

    });
  }

  render() {
    return (
      <div>
        <div><Ratings reviews={this.state.reviewData}
                      ratings={this.state.ratings}
        /></div>
        {/* <div><ReviewList reviews={this.state.reviewData} /></div> */}
      </div>
    );
  }
}
