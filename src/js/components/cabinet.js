import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Cabinet extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.cabinet').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='cabinet wrapper'>
        <h3>Кабинет</h3>
        <hr />
        <ImgContainer type='cabinet'/>
      </div>
    );
  }
}

export default Cabinet;