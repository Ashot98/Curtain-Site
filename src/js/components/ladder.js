import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Ladder extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.ladder').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div id='scroll' className='ladder wrapper'>
        <h3>Лестничные Пролеты</h3>
        <hr />
        <ImgContainer type='ladder'/>
      </div>
    );
  }
}

export default Ladder;