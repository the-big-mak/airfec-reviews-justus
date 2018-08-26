import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app';
const request = require('supertest')('http://localhost:3001');

describe('App Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('#app').exists()).toBe(true);
  });
  it('renders a search input', () => {
    expect(shallow(<App />).find('#search').length).toEqual(1);
  });
  it('renders a ratings input', () => {
    expect(shallow(<App />).find('#ratings').length).toEqual(1);
  });
  it('renders a reviewList input', () => {
    expect(shallow(<App />).find('#reviewList').length).toEqual(1);
  });
  it('renders a pages input', () => {
    expect(shallow(<App />).find('#pages').length).toEqual(1);
  });
  it('starts with allReviewData being an empty array', () => {
    const wrapper = shallow(<App />);
    const AppState = wrapper.state().allReviewData;
    expect(AppState.length).toEqual(0);
  });
  it('should fetch reviews by room id', (done) => {
    request.get('/reviews/30')
      .expect((res) => {
        expect(res.body.length).toBe(67);
      })
      .expect(200)
      .end(done);
  });
  // it('should update the state with reviews when App mounts', () => {
  //   // const shallowApp = shallow(<App />);
  //   // const reviewState = shallowApp.state().allReviewData;
  //   // expect(reviewState.length).toEqual(0);
  //   // shallowApp.setState({ roomId: 30 });
  //   // console.log('//////////', shallowApp.state().roomId);
  //   const wrapper = mount(<App />, { lifecycleExperimental: true });
  //   // wrapper.setState({ roomId: 30 });
  //   expect(wrapper.instance().componentDidMount()).toHaveBeenCalledTimes(1);
  //   // expect(reviewState.length).toEqual(67);

  // });
  it('should get the average rating', () => {
    const data = [
      {
        accuracy_rating: 2,
        communication_rating: 1,
      },
      {
        accuracy_rating: 4,
        communication_rating: 3,
      },
    ];
    expect(App.getAverageRating(data, 'accuracy_rating')).toEqual(3);
  });
  
});
