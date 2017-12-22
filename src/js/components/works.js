import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Works extends Component {
  render() {
    return (
      <div className='works'>
        <div className="wrapper">
          <h3>Наши работы</h3>
          <hr />
          <ImgContainer type='General'/>
        </div>
      </div>
    );
  }
}

export default Works;