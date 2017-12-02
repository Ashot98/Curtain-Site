import React, { Component } from 'react';

import Works from './works';

class Main extends Component {
  render() {
    return (
      <section className='main'>
        <a href="#contacts" className="btn-contact">Связь с нами</a>
        <Works />
      </section>
    );
  }
}

export default Main;