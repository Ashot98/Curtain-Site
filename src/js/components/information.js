import React, { Component } from 'react';
import $ from 'jquery';

import About from './about';
import Services from './services';

class Information extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.inform').css({
        "opacity": "1"
      });
    }, 10);
  }

  onTabClick(e) {
    const target = $(e.target);
    const about = $('.about');
    const services = $('.services');

    if(target.hasClass('active-tab-header'))
      return;
    
    if(target.hasClass('about-tab-header')) {
      $('.active-tab-header').removeClass('active-tab-header');
      target.addClass('active-tab-header');
      services.removeClass('active-tab');
      about.addClass('active-tab');
    }
    else {
      $('.active-tab-header').removeClass('active-tab-header');
      target.addClass('active-tab-header');
      about.removeClass('active-tab');
      services.addClass('active-tab');
    }
  }

  render() {
    return (
      <div className='inform'>
        <div className='wrapper'>
          <div className='tabs'>
            <h3 className='about-tab-header active-tab-header' onClick={this.onTabClick}>О Компании</h3>
            <h3 className='services-tab-header' onClick={this.onTabClick}>Услуги</h3>
          </div>
        </div>
        <About />
      </div>
    );
  }
}

export default Information;