import React from 'react';
import PropType from 'prop-types';

class Pages extends React.Component {
  next() {
    if (this.props.currentPage < this.props.numberOfPages - 1) {
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

  loop(start, end) {
    const pages = [];
    if (end <= this.props.numberOfPages) {
      for (let i = start; i <= end; i++) {
        pages.push(<button value={i} key={i} onClick={this.props.handlePageClick}>{i}</button>);
      }
    } else {
      for (let i = start; i < this.props.numberOfPages; i++) {
        pages.push(<button value={i} key={i} onClick={this.props.handlePageClick}>{i}</button>);
      }
    }
    return pages;
  }

  renderEndingDots() {
    if (this.props.currentPage < this.props.numberOfPages - 4) {
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
    const pages = this.props.numberOfPages;
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
    if (this.props.numberOfPages) {
      return (
        <div>
          {this.prev()}
          {<button value={1} onClick={this.props.handlePageClick}>1</button>}
          {this.renderBeginningDots()}
          {this.renderPages(this.props.currentPage).map(page => page)}
          {this.renderEndingDots()}
          {<button value={Math.ceil(this.props.numberOfPages)} onClick={this.props.handlePageClick}>{Math.ceil(this.props.numberOfPages)}</button>}
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
