import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class ChildRoom extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.childroom').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div id='scroll' className='childroom wrapper'>
        <h3>Детская</h3>
        <hr />
        <ImgContainer type='childroom'/>
      </div>
    );
  }
}

export default ChildRoom;