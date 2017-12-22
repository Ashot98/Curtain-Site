import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Sketches extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.sketches').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='sketches wrapper'>
        <h3>Эскизы</h3>
        <hr />
        <ImgContainer type='sketches'/>
      </div>
    );
  }
}

export default Sketches;