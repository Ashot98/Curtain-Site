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
    let target = $(e.target);
    if(target.prop('nodeName').toUpperCase() != 'DIV') {
      target = target.parent();
    }
    const about = $('.about');
    const services = $('.services');

    if(target.hasClass('active-tab-header'))
      return;
    
    if(target.hasClass('about-tab-header')) {
      $('.active-tab-header').removeClass('active-tab-header');
      target.addClass('active-tab-header');
      services.removeClass('active-tab');
      about.addClass('active-tab');
      setTimeout(() => {
        about.css({
          "opacity": "1"
        });
        services.css({
          "opacity": "0"
        })
      }, 10)
      
    }
    else {
      $('.active-tab-header').removeClass('active-tab-header');
      target.addClass('active-tab-header');
      about.removeClass('active-tab');
      services.addClass('active-tab');
      setTimeout(() => {
        services.css({
          "opacity": "1"
        });
        about.css({
          "opacity": "0"
        })
      }, 10)
    }
  }

  render() {
    return (
      <div id='scroll' className='inform'>
        <div className='wrapper'>
          <div className='tabs'>
            <div className='about-tab-header active-tab-header' onClick={this.onTabClick}>
              <h3>О Компании</h3>
              <hr />
            </div>
            <div className='services-tab-header' onClick={this.onTabClick}>
              <h3>Услуги</h3>
              <hr />
            </div>
          </div>
        </div>
        <About />
        <Services />
      </div>
    );
  }
}

export default Information;