import React from 'react';
import PropTypes from 'prop-types';
import ReviewText from './reviewText';

const HostResponse = ({ date, hostResponse }) => (
  <div>
    <img className="guestPhoto hostPhoto" src="1Spy3bu.jpg" alt="" />
    <div className="reviewHeader">
      <div className="guestName hostName">Response from {hostResponse.host_name}:</div>
    </div>
    <div className="hostTextAndDate">
      <div className="reviewText"><ReviewText reviewText={hostResponse.host_text} /></div>
      <div className="hostDate">{date}</div>
    </div>
  </div>
);

HostResponse.propTypes = {
  hostResponse: PropTypes.objectOf(PropTypes.node).isRequired,
  date: PropTypes.string.isRequired,
};

export default HostResponse;
