import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class DiningRoom extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.diningroom').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='diningroom wrapper'>
        <h3>Столовая</h3>
        <hr />
        <ImgContainer type='diningroom'/>
      </div>
    );
  }
}

export default DiningRoom;