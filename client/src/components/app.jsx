import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList';
import RatingsList from './ratingsList';
import Search from './search';
import BackToAllReviews from './backToAllReviews';
import Pages from './pages';
import svg from './svg';
import FullStar from './stars/fullStar';
import styles from './styles/app.css';

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

  static displayStarRatings(rating) {
    let starRating = rating;
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (starRating >= 1) {
        stars.push(svg.star);
      } else if (starRating < 1 && starRating > 0) {
        stars.push(svg.halfStar);
      } else {
        stars.push(svg.emptyStar);
      }
      starRating -= 1;
    }
    return stars;
  }

  static findAndBoldWord(text, word) {
    return (
      <span>
        { text.split(word)
          .reduce((prev, current, i) => {
            if (!i) {
              return [current];
            }
            return prev.concat(<span className={styles.searchBold} key={word + current}>{ word }</span>, current);
          }, [])
        }
      </span>);
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
    this.handleSearchClose = this.handleSearchClose.bind(this);
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

  handleSearchClose() {
    this.setState({
      searchText: '',
    });
  }

  filterReviews(query) {
    const copyData = JSON.stringify(this.state.allReviewData);
    const copied = JSON.parse(copyData);
    const filteredReviews = copied.filter((review) => {
      const reviewText = review.review_text.toLowerCase();
      const hostText = review.host_text.toLowerCase();
      const query1 = query.toLowerCase();
      if (review.id % 10 === 0) {
        return hostText.includes(query1);
      }
      return reviewText.includes(query1);
    });
    const filteredAndBolded = [];
    filteredReviews.forEach((review) => {
      const reviewText = review.review_text.toLowerCase();
      const hostText = review.host_text.toLowerCase();
      const query1 = this.state.searchText.toLowerCase();
      const reviewTextBolded = App.findAndBoldWord(reviewText, query1);
      const hostTextBolded = App.findAndBoldWord(hostText, query1);
      review.review_text = reviewTextBolded;
      review.host_text = hostTextBolded;
      filteredAndBolded.push(review);
    });
    this.setState({
      currentReviews: filteredAndBolded,
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
    App.scrollToTop();
    if (this.state.currentPage < this.state.allReviewData.length / 3) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  }

  handlePrevClick() {
    App.scrollToTop();
    if (this.state.currentPage > 0) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  }


  handlePageClick(e) {
    const pageNumber = e.target.value;
    const intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        this.setState({
          currentPage: pageNumber - 1,
        });
        intersectionObserver.unobserve(document.getElementById('top'));
      }
    });
    intersectionObserver.observe(document.getElementById('top'));
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
        displayStarRatings={App.displayStarRatings}
      />);
    return (
      <div className={styles.fullContainer}>
        <div id="top" />
        <div><Search
          handleSearchTextChange={this.handleSearchTextChange}
          handleKeyPress={this.handleKeyPress}
          totalRating={this.getTotalRating()}
          totalReviews={this.state.allReviewData.length}
          searchText={this.state.searchText}
          displayStarRatings={App.displayStarRatings}
          handleSearchClose={this.handleSearchClose}
        />
        </div>
        <div>
          {hasBeenSearched}
        </div>
        <div><ReviewList
          reviews={this.state.currentReviews.slice(3 * this.state.currentPage, (3 * this.state.currentPage) + 3)}
        />
        </div>
        <div><Pages
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          currentPage={this.state.currentPage}
          handlePageClick={this.handlePageClick}
          numberOfPages={this.state.currentReviews.length / 3}
        />
        </div>
      </div>
    );
  }
}
