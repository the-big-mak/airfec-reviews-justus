import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList';
import RatingsList from './ratingsList';
import Search from './search';
import BackToAllReviews from './backToAllReviews';
import Pages from './pages';

export default class App extends React.Component {
  static sortedByDate(reviews) {
    return reviews.sort((a, b) => {
      const aa = a.date.split('/');
      const bb = b.date.split('/');
      return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  static scrollToTop() {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
  }

  constructor(props) {
    super(props);
    this.state = {
      roomId: 5,
      allReviewData: [],
      currentReviews: [],
      ratings: [],
      hasBeenSearched: false,
      searchText: '',
      searchedWord: '',
      currentPage: 0,
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleBackToAllReviewsClick = this.handleBackToAllReviewsClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.getTotalRating = this.getTotalRating.bind(this);
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

  static getAverageRating(reviewRatings, subclass) {
    let sum = 0;
    reviewRatings.forEach((review) => {
      sum += review[subclass];
    });
    const average = sum / reviewRatings.length;
    return Math.round(average * 2) / 2;
  }

  getTotalRating() {
    let sum = 0;
    this.state.ratings.forEach((rating) => {
      sum += rating;
    });
    return Math.round((2 * sum) / 6) / 2;
  }

  handleReceivedReviewData(data) {
    const ratings = [
      'accuracy_rating',
      'communication_rating',
      'cleanliness_rating',
      'location_rating',
      'checkin_rating',
      'value_rating',
    ];

    App.sortedByDate(data);
    this.setState({
      allReviewData: data,
      currentReviews: data,
      ratings: ratings.map(rating => App.getAverageRating(data, rating)),
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
        currentPage: 0,
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

  handleNextClick() {
    if (this.state.currentPage < this.state.allReviewData.length / 7) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
      App.scrollToTop();
    }
  }

  handlePrevClick() {
    if (this.state.currentPage > 0) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
      App.scrollToTop();
    }
  }


  handlePageClick(e) {
    this.setState({
      currentPage: e.target.value - 1,
    });
    App.scrollToTop();
  }

  render() {
    const hasBeenSearched = this.state.hasBeenSearched ?
      (<BackToAllReviews
        handleBacktoAllReviewsClick={this.handleBackToAllReviewsClick}
        currentReviewsLength={this.state.currentReviews.length}
        searchedWord={this.state.searchedWord}
      />) :
      (<RatingsList
        ratings={this.state.ratings}
      />);
    return (
      <div className="fullContainer">
        <div id="top" />
        <div><Search
          handleSearchTextChange={this.handleSearchTextChange}
          handleKeyPress={this.handleKeyPress}
          totalRating={this.getTotalRating()}
          totalReviews={this.state.allReviewData.length}
          searchText={this.state.searchText}
        />
        </div>
        <div>
          {hasBeenSearched}
        </div>
        <div><ReviewList reviews={this.state.currentReviews.slice(7 * this.state.currentPage, (7 * this.state.currentPage) + 7)} /></div>
        <div className="pagesContainer"><Pages
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          currentPage={this.state.currentPage}
          handlePageClick={this.handlePageClick}
          numberOfPages={this.state.currentReviews.length / 7}
        />
        </div>
      </div>
    );
  }
}
