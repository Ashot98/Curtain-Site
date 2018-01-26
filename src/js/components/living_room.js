import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class LivingRoom extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.livingroom').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div id='scroll' className='livingroom wrapper'>
        <h3>Гостиная</h3>
        <hr />
        <ImgContainer type='livingroom'/>
      </div>
    );
  }
}

export default LivingRoom;