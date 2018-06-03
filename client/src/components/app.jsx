import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: 5,
      reviewData: [],
    };
  }

  componentDidMount() {
    this.getReviewData(this.handleReceivedReviewData.bind(this));
  }

  getReviewData(callback) {
    axios.get('/reviews', {
      params: {
        ID: this.state.roomId,
      },
    })
      .then((response) => {
        console.log('success got data', response.data);
        callback(response.data);
      })
      .catch(error => console.error('failed to get room data', error))
  }

  handleReceivedReviewData(data) {
    this.setState({
      reviewData: data,
    })
  }

  render() {
    return (
      <div>
        <div>hello world</div>
        <div><ReviewList reviews={this.state.reviewData} /></div>
      </div>
    );
  }
}
