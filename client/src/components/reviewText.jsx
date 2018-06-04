import React from 'react';
import PropTypes from 'prop-types';

export default class ReviewText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortText: this.props.reviewText.substring(0, 280),
      fullText: this.props.reviewText,
    };
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleReadMoreClick(e) {
    e.preventDefault();
    this.setState({
      fullText: '',
    });
  }

  render() {
    if (this.state.fullText.length >= 280) {
      return (
        <div>{this.state.shortText}...<button className="readMore" onClick={this.handleReadMoreClick}>Read More</button></div>
      );
    }
    return (
      <div>{this.props.reviewText}</div>
    );
  }
}

ReviewText.propTypes = {
  reviewText: PropTypes.string.isRequired,
};
