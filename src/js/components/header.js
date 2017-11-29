import React, { Component } from 'react';

import Navbar from './navbar';
import Theme from './theme';


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Navbar />
        <Theme />
      </header>
    );
  }
}

export default Header;