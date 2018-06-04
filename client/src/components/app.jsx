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
      searchText: '',
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
      .catch(error => console.error('failed to get room data', error));
  }

  sortedByDate(reviews) {
    return reviews.sort((a, b) => {
      let aa = a.date.split('/');
      let bb = b.date.split('/');
      return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }
  
  getAverageRating(reviewRatings, subclass) {
    let sum = 0;
    reviewRatings.forEach(review => {
      sum += review[subclass];
    });
    sum = sum/reviewRatings.length
    return Math.round(sum * 2) / 2;
  }
  
  handleReceivedReviewData(data) {
    const accuracy = this.getAverageRating(data, 'accuracy_rating');
    const communication = this.getAverageRating(data, 'communication_rating');
    const cleanliness = this.getAverageRating(data, 'cleanliness_rating');
    const location = this.getAverageRating(data, 'location_rating');
    const checkin = this.getAverageRating(data, 'checkin_rating');
    const value = this.getAverageRating(data, 'value_rating');
    const total = Math.round((2 * (accuracy + communication + cleanliness + location + checkin + value)) / 6) / 2;
    this.sortedByDate(data);
    this.setState({
      reviewData: data,
      ratings: [accuracy, communication, cleanliness, location, checkin, value, total],

    });
  }

  handleSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleKeyPress(target) {
    if(target.charCode==13){
      this.searchReviews(this.state.searchText);    
    }
  }

  searchReviews(query) {
    console.log(query);
  }

  render() {
    return (
      <div>
        <div><Ratings reviews={this.state.reviewData}
                      ratings={this.state.ratings}
                      handleSearchTextChange={this.handleSearchTextChange.bind(this)}
                      handleKeyPress={this.handleKeyPress.bind(this)}
        /></div>
        <div><ReviewList reviews={this.state.reviewData} /></div>
      </div>
    );
  }
}
