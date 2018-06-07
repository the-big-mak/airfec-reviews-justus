import React from 'react';
import PropTypes from 'prop-types';
import ReviewText from './reviewText';
import styles from './styles/hostResponse.css';

const HostResponse = ({ date, hostResponse }) => (
  <div>
    <img className={styles.hostPhoto} src="1Spy3bu.jpg" alt="" />
    <div className={styles.reviewHeader}>
      <div className={styles.hostName}>Response from {hostResponse.host_name}:</div>
    </div>
    <div className={styles.hostTextAndDate}>
      <div className={styles.reviewText}><ReviewText reviewText={hostResponse.host_text} /></div>
      <div className={styles.hostDate}>{date}</div>
    </div>
  </div>
);

HostResponse.propTypes = {
  hostResponse: PropTypes.objectOf(PropTypes.node).isRequired,
  date: PropTypes.string.isRequired,
};

export default HostResponse;
