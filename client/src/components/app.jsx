import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList';
import Ratings from './ratings';
import Search from './search';
import BackToAllReviews from './backToAllReviews';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: 5,
      allReviewData: [],
      currentReviews: [],
      ratings: [],
      searchText: '',
      hasBeenSearched: false,
      searchedWord: '',
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleBackToAllReviewsClick = this.handleBackToAllReviewsClick.bind(this);
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
        callback(response.data);
      })
      .catch(error => console.error('failed to get room data', error));
  }

  getAverageRating(reviewRatings, subclass) {
    let sum = 0;
    reviewRatings.forEach((review) => {
      sum += review[subclass];
    });
    const average = sum / reviewRatings.length;
    return Math.round(average * 2) / 2;
  }

  sortedByDate(reviews) {
    return reviews.sort((a, b) => {
      const aa = a.date.split('/');
      const bb = b.date.split('/');
      return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
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
      allReviewData: data,
      currentReviews: data,
      ratings: [accuracy, communication, cleanliness, location, checkin, value, total],

    });
  }

  handleSearchTextChange(e) {
    this.setState({
      searchText: e.target.value,
    });
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.filterReviews(this.state.searchText);
      this.setState({
        hasBeenSearched: true,
        searchedWord: this.state.searchText,
      });
    }
  }

  filterReviews(query) {
    const filteredReviews = this.state.allReviewData.filter((review) => {
      const reviewText = review.review_text.toLowerCase();
      const hostText = review.host_text.toLowerCase();
      const query1 = query.toLowerCase();
      if (review.id % 10 === 0) {
        return hostText.includes(query1);
      }
      return reviewText.includes(query1);
    });
    this.setState({
      currentReviews: filteredReviews,
    });
  }

  handleBackToAllReviewsClick() {
    this.setState({
      hasBeenSearched: false,
      currentReviews: this.state.allReviewData,
      searchText: '',
    });
  }

  render() {
    const hasBeenSearched = this.state.hasBeenSearched ?
      (<BackToAllReviews
        handleBacktoAllReviewsClick={this.handleBackToAllReviewsClick}
        currentReviewsLength={this.state.currentReviews.length}
        searchedWord={this.state.searchedWord}
      />) :
      (<Ratings
        ratings={this.state.ratings}
      />);

    return (
      <div id="app">
        <div id="search"><Search
          handleSearchTextChange={this.handleSearchTextChange}
          handleKeyPress={this.handleKeyPress}
          totalRating={this.state.ratings[6]}
          totalReviews={this.state.allReviewData.length}
          searchText={this.state.searchText}
        />
        </div>
        <div>
          {hasBeenSearched}
        </div>
        <div id="reviewList"><ReviewList reviews={this.state.currentReviews} /></div>
      </div>
    );
  }
}
