import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class BedRoom extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.bedroom').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='bedroom wrapper'>
        <h3>Спальня</h3>
        <hr />
        <ImgContainer type='bedroom'/>
      </div>
    );
  }
}

export default BedRoom;