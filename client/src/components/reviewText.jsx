import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/reviewText.css';

export default class ReviewText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //shortText: this.props.reviewText.substring(0, 280),
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

  static convertArray(text) {
    const words = []
    text.forEach((word) => {
      words.concat(word);
    });
    return words;
  }

  render() {
    const text = Array.isArray(this.state.fullText) ? ReviewText.convertArray(this.state.fullText) : this.state.fullText;
    // if (text.length >= 280) {
    //   return (
    //     <div>{this.state.shortText}...<button className={styles.readMore} onClick={this.handleReadMoreClick}>Read More</button></div>
    //   );
    // }
    return (
      <div>{text}</div>
    );
  }
}

// ReviewText.propTypes = {
//   reviewText: PropTypes.string.isRequired,
// };
