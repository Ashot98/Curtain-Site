import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Corp extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.corp').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div id='scroll' className='corp wrapper'>
        <h3>Корпоративные</h3>
        <hr />
        <ImgContainer type='corp'/>
      </div>
    );
  }
}

export default Corp;