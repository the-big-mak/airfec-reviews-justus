import React from 'react';
import PropTypes from 'prop-types';
import ReviewText from './reviewText';
import Report from './report';
import HostResponse from './hostResponse';
import ReportThankyou from './reportThankyou';
import svg from './svg';
import styles from './styles/review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReport: false,
      showThankyou: false,
      buttonDisabled: true,
    };
    this.handleFlagClick = this.handleFlagClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleLabelClick = this.handleLabelClick.bind(this);
  }
  componentWillMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleSubmitClick() {
    this.setState({
      showThankyou: true,
      showReport: false,
      buttonDisabled: true,
    });
  }

  handleClose() {
    this.setState({
      showThankyou: false,
      showReport: false,
      buttonDisabled: true,
    });
  }

  handleFlagClick() {
    this.setState({
      showReport: true,
    });
  }

  handleOutsideClick(e) {
    if (this.wrapperRef && this.wrapperRef.contains(e.target)) {
      return;
    }
    this.handleClose();
  }

  handleLabelClick() {
    this.setState({
      buttonDisabled: false,
    });
  }

  render() {
    const {
      review,
      searchedWord,
    } = this.props;

    const month = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };
    const date = review.date.split('/');
    const formatedDate = `${month[date[1]]} ${date[0]}`;

    const hostResponse = review.id % 10 === 0 ?
      (<HostResponse
        date={formatedDate}
        hostResponse={review}
      />)
      : null;

    const superUser = review.id % 5 === 0 ?
      svg.superUser :
      null;

    const showReport = this.state.showReport ?
      (<Report
        buttonState={this.state.buttonDisabled}
        handleLabelClick={this.handleLabelClick}
        setWrapperRef={this.setWrapperRef}
        handleOutsideClick={this.handleOutsideClick}
        handleClose={this.handleClose}
        handleSubmitClick={this.handleSubmitClick}
      />) :
      null;

    const showThankyouPopup = this.state.showThankyou ?
      (<ReportThankyou
        setWrapperRef={this.setWrapperRef}
        handleOutsideClick={this.handleOutsideClick}
        handleClose={this.handleClose}
      />) :
      null;

    return (
      <div className={styles.review}>
        <img className={styles.guestPhoto} src="2RTqR9s.jpg" alt="" />
        <div className={styles.superUser}>{superUser}</div>
        <button onClick={this.handleFlagClick} className={styles.report}>{svg.flag}</button>
        <div>{showReport}</div>
        <div>{showThankyouPopup}</div>
        <div className={styles.reviewHeader}>
          <div className={styles.guestName}>{review.guest_name}</div>
          <div className={styles.date}>{formatedDate}</div>
        </div>
        <div className={styles.reviewText}><ReviewText
          reviewText={review.review_text}
          searchedWord={searchedWord}
        />
        </div>
        <div className={styles.hostResponse}>{hostResponse}</div>
        <div className={styles.bottomSpace}>
          <div className={styles.bottomBorder} />
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.objectOf(PropTypes.node).isRequired,
  searchedWord: PropTypes.string.isRequired,
};

export default Review;
