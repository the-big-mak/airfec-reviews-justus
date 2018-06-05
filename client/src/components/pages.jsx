import React from 'react';
import PropType from 'prop-types';
import Page1 from './pageNumbers/page1';
import Page2 from './pageNumbers/page2';
import Page3 from './pageNumbers/page3';
import Page4 from './pageNumbers/page4';

class Pages extends React.Component {
  // if (props.currentPage === 0) {
  //   return (
  //     <div>
  //       <button value={1} onClick={props.handlePageClick}>1</button>
  //       <div>
  //         {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
  //       </div>
  //       <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
  //       <button onClick={props.handleNextClick}>Next</button>
  //     </div>
  //   );
  // } else if (props.currentPage === Math.floor(props.numberOfReviews)) {
  //   return (
  //     <div>
  //       <button onClick={props.handlePrevClick}>Prev</button>
  //       <button value={1} onClick={props.handlePageClick}>1</button>
  //       <div>
  //         {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
  //       </div>
  //       <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <button onClick={props.handlePrevClick}>Prev</button>
  //     <button value={1} onClick={props.handlePageClick}>1</button>
  //     <div>
  //       {props.numberOfPages.map(page => <Page page={page} key={page} handlePageClick={props.handlePageClick} />)}
  //     </div>
  //     <button value={Math.ceil(props.numberOfReviews)} onClick={props.handlePageClick}>{Math.ceil(props.numberOfReviews)}</button>
  //     <button onClick={props.handleNextClick}>Next</button>
  //   </div>
  // );
  // if (props.currentPage === 0 && ) {
  //   return (
  //     <Page1
  //       handlePageClick={props.handlePageClick}
  //       handleNextClick={props.handleNextClick}
  //       numberOfReviews={props.numberOfReviews}
  //     />
  //   );
  // }
  // if (props.currentPage === 1) {
  //   return (
  //     <Page2
  //       handlePageClick={props.handlePageClick}
  //       handleNextClick={props.handleNextClick}
  //       handlePrevClick={props.handlePrevClick}
  //       numberOfReviews={props.numberOfReviews}
  //     />
  //   );
  // }
  // if (props.currentPage === 2) {
  //   return (
  //     <Page3
  //       handlePageClick={props.handlePageClick}
  //       handleNextClick={props.handleNextClick}
  //       handlePrevClick={props.handlePrevClick}
  //       numberOfReviews={props.numberOfReviews}
  //     />
  //   );
  // }
  // if (props.currentPage === 3) {
  //   return (
  //     <Page4
  //       handlePageClick={props.handlePageClick}
  //       handleNextClick={props.handleNextClick}
  //       handlePrevClick={props.handlePrevClick}
  //       numberOfReviews={props.numberOfReviews}
  //     />
  //   );
  // }

  next() {
    if (this.props.currentPage < this.props.numberOfReviews - 1) {
      return <button onClick={this.props.handleNextClick}>Next</button>;
    }
    return null;
  }

  prev() {
    if (this.props.currentPage !== 0) {
      return <button onClick={this.props.handlePrevClick}>Prev</button>;
    }
    return null;
  }

  firstPage() {
    return <button value={1} onClick={this.props.handlePageClick}>1</button>;
  }

  lastPage() {
    return <button value={Math.ceil(this.props.numberOfReviews)} onClick={this.props.handlePageClick}>{Math.ceil(this.props.numberOfReviews)}</button>;
  }

  loop(start, end) {
    const pages = [];
    for (let i = start; i <= end ; i++) {
      pages.push(<button value={i} key={i} onClick={this.props.handlePageClick}>{i}</button>);
    }
    return pages;
  }

  renderEndingDots() {
    if (this.props.currentPage < this.props.numberOfReviews - 4) {
      return <div>...</div>;
    }
    return null;
  }
  renderBeginningDots() {
    if (this.props.currentPage > 3) {
      return <div>...</div>;
    }
    return null;
  }

  renderPages(currentPage) {
    const pages = this.props.numberOfReviews;
    if (currentPage < 2) {
      return this.loop(2, 3);
    } else if (currentPage === 2) {
      return this.loop(2, 4);
    } else if (currentPage === 3) {
      return this.loop(2, 5);
    } else if (currentPage > 3 && currentPage < pages - 4) {
      return this.loop(currentPage, currentPage + 2);
    } else if (currentPage < pages - 3) {
      return this.loop(currentPage, currentPage + 3);
    } else if (currentPage < pages - 2) {
      return this.loop(currentPage, currentPage + 2);
    } else if (currentPage < pages - 1 && pages > 4) {
      return this.loop(currentPage, currentPage + 1);
    } else if (pages > 4) {
      return this.loop(currentPage - 1, currentPage);
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.prev()}
        {this.firstPage()}
        {this.renderBeginningDots()}
        {this.renderPages(this.props.currentPage).map(page => page)}
        {this.renderEndingDots()}
        {this.lastPage()}
        {this.next()}
      </div>
    );
  }
}

Pages.propTypes = {
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
  handlePageClick: PropType.func.isRequired,
  numberOfPages: PropType.arrayOf(PropType.number).isRequired,
  currentPage: PropType.number.isRequired,
  numberOfReviews: PropType.number.isRequired,
};

export default Pages;
