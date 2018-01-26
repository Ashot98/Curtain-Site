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
      <section id='scroll' className='main'>
        <div className='contact_us'>
          <Link to='/contacts' onClick={() => this.props.setActive('contacts')} className="btn-contact">Связь с нами</Link>
          <div className='socials'>
            <a href='https://vk.com/club124645374' target='_blank'><span className='fa fa-vk' aria-hidden='true'></span></a>
            <a href='https://www.instagram.com/salon_jakkard/' target='_blank'><span className='fa fa-instagram' aria-hidden='true'></span></a>
            <a href='https://www.ok.ru/profile/556242223180' target='_blank'><span className='fa fa-odnoklassniki' aria-hidden='true'></span></a>
          </div>
        </div>
        <Works />
        <ContactsShort />
      </section>
    );
  }
}

export default connect(null, { setActive })(Main);