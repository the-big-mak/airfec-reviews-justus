import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/reviewText.css';

export default class ReviewText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortText: true,
    };
    this.handleReadMoreClick = this.handleReadMoreClick.bind(this);
  }

  handleReadMoreClick(e) {
    e.preventDefault();
    this.setState({
      shortText: false,
    });
  }

  shortenText() {
    if (typeof this.props.reviewText !== 'string') {
      const strings = [];
      let counter = 0;
      let isTooLong = false;
      this.props.reviewText.props.children.forEach((text) => {
        if (typeof text === 'string') {
          let tempString = '';
          for (let i = 0; i < text.length; i++) {
            tempString += text[i];
            counter += 1;
            if (counter > 280) {
              strings.push(tempString);
              isTooLong = true;
              return;
            }
          }
          strings.push(tempString);
        } else {
          strings.push(text);
        }
      });
      if (isTooLong) {
        return strings;
      }
      return false;
    }
    if (this.props.reviewText.length > 280) {
      return this.state.fullText.substring(0, 280);
    }
    return false;
  }

  render() {
    if (this.shortenText() && this.state.shortText) {
      return (
        <div>{this.shortenText()}...<button className={styles.readMore} onClick={this.handleReadMoreClick}>Read More</button></div>
      );
    }
    return (
      <div>{this.props.reviewText}</div>
    );
  }
}

// ReviewText.propTypes = {
//   reviewText: PropTypes.string.isRequired,
// };
