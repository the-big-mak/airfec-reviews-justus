import React from 'react';
import StarRatings from 'react-star-ratings';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // handleSearchTextChange(e) {
  //   this.setState({
  //     searchText: e.target.value,
  //   })
  // }

  render() {
    return (
    <div>
      <div className="totalReviews">
        <div className="totalReviewsWords">{this.props.reviews.length} Reviews<span><StarRatings
            rating={this.props.ratings[6]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
      </div>
      <div className="searchContainer">
        <input className="searchBox" type="text" placeholder="Search reviews"
                onChange={this.props.handleSearchTextChange}
                onKeyPress={this.props.handleKeyPress}
                />
      </div>
      <div className="subRatings">
        <div className="acc-com-cle">
          <div className="accuacy">Accuracy <span><StarRatings
            rating={this.props.ratings[0]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
          <div className="communication">Communication <span><StarRatings
            rating={this.props.ratings[1]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
          <div className="cleanliness">Cleanliness <span><StarRatings
            rating={this.props.ratings[2]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
        </div>
        <div className="loc-che-val">
          <div className="location">Location <span><StarRatings
            rating={this.props.ratings[3]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
          <div className="checkin">Checkin <span><StarRatings
            rating={this.props.ratings[4]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
          <div className="value">Value <span><StarRatings
            rating={this.props.ratings[5]}
            starDimension="20px"
            starSpacing="3px"
            starRatedColor="#008489"
        /></span></div>
        </div>
      </div>
    </div>
    );
  }
}

