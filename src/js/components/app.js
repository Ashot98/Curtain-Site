import React, { Component } from 'react';
import routes from '../routes';
import $ from 'jquery';

import Header from "./header";
import Footer from "./footer";

$(window).on('resize', () => {
  const winSize = window.innerWidth;
  const reqCss = $('.nav .active').css('display');
  const menu = $('.nav li');
  const logo = $('.nav .logo');
  
  if(winSize > 560 && reqCss == 'none')
    menu.css({
      "display": "block"
    });
  else if(winSize < 560 && reqCss == 'block') {
    
     menu.css({
      "display": "none"
    });
     logo.css({
      "display": "block"
    });
  } 
})

export default class App extends Component {
  render() {
    return (
        <div>
            <Header />
            {routes}
            <Footer />
        </div>
    );
  }
}