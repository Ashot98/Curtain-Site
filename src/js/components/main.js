import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { setActive } from '../actions/index';
import { connect } from 'react-redux';

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
        <Link to='/contacts' onClick={() => this.props.setActive('contacts')} className="btn-contact">Связь с нами</Link>
        <Works />
        <ContactsShort />
      </section>
    );
  }
}

export default connect(null, { setActive })(Main);