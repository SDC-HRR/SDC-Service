/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const item = this.props.selected;

    return (
      <div className="media-CarouselSlide">
        {item.video !== undefined && (
        <video className="media-currentView" alt="Game trailer" src={item.video.video} controls />
        )}
        {item.image !== undefined && (
        <img src={item.image} alt="Enlarged screenshot" className="media-currentView" />
        )}
      </div>
    );
  }
}

export default CarouselSlide;
