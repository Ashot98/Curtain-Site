import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { getImages } from '../actions/index';

class ImgContainer extends Component {
  componentWillMount() {
    this.props.getImages(this.props.type);
  }

  renderImage(img) {
    return (
      <div className="img_item" onClick={this.onImgClick}>
        <img src={img.path} alt="" />
      </div>
    );
  }

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
    console.log(this.props.photos);
    return (
      <div className='img_items'>
        <div className="selected_img" onClick={this.onImgClick}>
          <img src=""></img>
        </div>
        { this.props.photos.map(this.renderImage.bind(this)) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps, { getImages })(ImgContainer);