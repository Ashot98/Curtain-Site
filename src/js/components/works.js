import React, { Component } from 'react';
import $ from 'jquery';


class Works extends Component {
  onImgClick(e) {
    const src = $(e.target).attr("src");
    const container = $('.selected_img');
    const img = $('.selected_img img')
    
    if(container.hasClass('opened')) {
      container.removeClass('opened');
      img.attr("src", "");
      $('body').css('overflow', 'auto');
    }
    else {
      img.attr("src", src);
      container.addClass('opened');
      $('body').css('overflow', 'hidden');
    }
    
  }
  
  render() {
    return (
      <div className='works'>
        <div className="wrapper">
          <h3>Наши работы</h3>
          <hr />
          <div className='works_items'>
            <div className="selected_img" onClick={this.onImgClick}>
              <img src=""></img>
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="https://picsum.photos/400/400/?random" alt="" />
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="" alt="" />
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="" alt="" />
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="" alt="" />
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="" alt="" />
            </div>
            <div className="works_item" onClick={this.onImgClick}>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;