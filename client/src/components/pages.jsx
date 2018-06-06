import React from 'react';
import PropType from 'prop-types';

class Pages extends React.Component {
  next() {
    if (this.props.currentPage < this.props.numberOfPages - 1) {
      return <button className="pageButton" onClick={this.props.handleNextClick}><svg
      viewBox="0 0 41.999 41.999" className="nextButton">
   <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
     c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
     c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/></svg></button>;
    }
    return null;
  }

  prev() {
    if (this.props.currentPage !== 0) {
      return <button className="pageButton" onClick={this.props.handlePrevClick}><svg
      viewBox="0 0 41.999 41.999" className="nextButton" transform="scale(-1, 1)">
   <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
     c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
     c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"/></svg></button>;
    }
    return null;
  }

  loop(start, end) {
    const pages = [];
    if (end <= this.props.numberOfPages) {
      for (let i = start; i <= end; i++) {
        pages.push(<button className="pageButton" value={i} key={i} onClick={this.props.handlePageClick}>{i}</button>);
      }
    } else {
      for (let i = start; i < this.props.numberOfPages; i++) {
        pages.push(<button className="pageButton" value={i} key={i} onClick={this.props.handlePageClick}>{i}</button>);
      }
    }
    return pages;
  }

  renderEndingDots() {
    if (this.props.currentPage < this.props.numberOfPages - 4 && this.props.numberOfPages >= 5) {
      return <div className="dots dotsContainer">...</div>;
    }
    return null;
  }
  renderBeginningDots() {
    if (this.props.currentPage > 3 && this.props.numberOfPages >= 5) {
      return <div className="dots dotsContainer">...</div>;
    }
    return null;
  }

  renderPages(currentPage) {
    const pages = Math.floor(this.props.numberOfPages);
    if (this.props.numberOfPages < 5) {
      return this.loop(2, 4);
    } else if (currentPage < 2) {
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
    if (Math.floor(this.props.numberOfPages)) {
      return (
        <div className="pages">
          {this.prev()}
          {<button className="pageButton" value={1} onClick={this.props.handlePageClick}>1</button>}
          {this.renderBeginningDots()}
          {this.renderPages(this.props.currentPage).map(page => page)}
          {this.renderEndingDots()}
          {<button className="pageButton" value={Math.ceil(this.props.numberOfPages)} onClick={this.props.handlePageClick}>{Math.ceil(this.props.numberOfPages)}</button>}
          {this.next()}
        </div>
      );
    }
    return null;
  }
}

Pages.propTypes = {
  handleNextClick: PropType.func.isRequired,
  handlePrevClick: PropType.func.isRequired,
  handlePageClick: PropType.func.isRequired,
  currentPage: PropType.number.isRequired,
  numberOfPages: PropType.number.isRequired,
};

export default Pages;
