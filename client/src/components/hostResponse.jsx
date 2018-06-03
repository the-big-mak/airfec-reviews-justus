import React from 'react';
import ReviewText from './reviewText.jsx';

const HostResponse = (props) => (
  <div>
      <img className="guestPhoto hostPhoto" src="1Spy3bu.jpg" />
        <div className="reviewHeader">
          <div className="guestName">Response from {props.hostResponse.host_name}:</div>
        </div>
      <div className="reviewText"><ReviewText reviewText={props.hostResponse.host_text} /></div>
      <div className="hostDate">{props.date1}</div>
  </div>
);

export default HostResponse;
