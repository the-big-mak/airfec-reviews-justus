import React from 'react';
import PropTypes from 'prop-types';
import ReviewText from './reviewText';
import Report from './report';
import HostResponse from './hostResponse';
import ReportThankyou from './reportThankyou';
import svg from './svg';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReport: false,
      showThankyou: false,
    };
    this.handleFlagClick = this.handleFlagClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
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
    });
  }

  handleClose() {
    this.setState({
      showThankyou: false,
      showReport: false,
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

  render() {
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
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    const date = this.props.review.date.split('/');
    const formatedDate = `${month[date[1]]} ${date[0]}`;
    const hostResponse = this.props.review.id % 10 === 0 ? '' : <HostResponse date={formatedDate} hostResponse={this.props.review} />;
  
    const showReport = this.state.showReport ? <Report setWrapperRef={this.setWrapperRef} handleOutsideClick={this.handleOutsideClick} handleClose={this.handleClose} handleSubmitClick={this.handleSubmitClick} /> : null;
    const showThankyouPopup = this.state.showThankyou ? <ReportThankyou setWrapperRef={this.setWrapperRef} handleOutsideClick={this.handleOutsideClick} handleClose={this.handleClose} /> : null;
    return (
      <div className="review">
        <img className="guestPhoto" src="2RTqR9s.jpg" alt="" />
        <button onClick={this.handleFlagClick} className="report">{svg.flag}</button>
        <div>{showReport}</div>
        <div>{showThankyouPopup}</div>
        <div className="reviewHeader">
          <div className="guestName">{this.props.review.guest_name}</div>
          <div className="date">{formatedDate}</div>
        </div>
        <div className="reviewText"><ReviewText reviewText={this.props.review.review_text} /></div>
        <div className="hostResponse">{hostResponse}</div>
        <div className="bottomSpace">
          <div className="bottomBorder" />
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default Review;
