import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Works from './works';
import ContactsShort from './contacts_short';

class Main extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.main').css({
        "opacity": "1"
      });
    }, 10);
  }
  
  render() {
    return (
      <section className='main'>
        <Link to='/contacts' className="btn-contact">Связь с нами</Link>
        <Works />
        <ContactsShort />
      </section>
    );
  }
}

export default Main;