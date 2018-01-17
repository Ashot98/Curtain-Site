import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { getImages } from '../actions/index';

class ImgContainer extends Component {
  componentWillMount() {
    this.props.getImages(this.props.type);
  }
  
  componentWillUpdate() {
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
    let imgElem = '';
    if(Array.isArray(this.props.photos)) {
      imgElem = this.props.photos.map(this.renderImage.bind(this))
    }

    return (
      <div className='img_items'>
        <div className="selected_img" onClick={this.onImgClick}>
          <img src=""></img>
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/415177_img_2191-20-10-17-10-58.jpg' alt="" />
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/492876_img_2193-20-10-17-10-56.jpg' alt="" />
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/617095_dsc09190f.jpg' alt="" />
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/764585_dsc07364f.jpg' alt="" />
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/828137_cimg6313f.jpg' alt="" />
        </div>
        <div className="img_item" onClick={this.onImgClick}>
          <img src='img/general/860720__mg_3840-2.jpg' alt="" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps, { getImages })(ImgContainer);