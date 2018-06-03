import React from 'react';

export default class ReviewText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortText: this.props.reviewText.substring(0, 280),
      fullText: this.props.reviewText,
    };
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
        <div>{this.state.shortText}...<a href="#" onClick={this.handleReadMoreClick.bind(this)}>Read More</a></div>
      );
    }
    return (
      <div>{this.props.reviewText}</div>
    )
  }
};