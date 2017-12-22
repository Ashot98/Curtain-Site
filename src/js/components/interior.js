import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Interior extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.interior').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='interior wrapper'>
        <h3>Предметы Интерьера</h3>
        <hr />
        <ImgContainer type='interior'/>
      </div>
    );
  }
}

export default Interior;