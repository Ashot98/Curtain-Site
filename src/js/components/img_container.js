import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { getImages, deleteImages } from '../actions/index';

class ImgContainer extends Component {
  componentWillMount() {
    this.props.getImages(this.props.type);
  }

  componentDidMount() {
    setTimeout(() => {
      $('.loading').css('display', 'none');
      $('.img_items').css('display', 'flex');
    }, 1000);
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.type != nextProps.type) {
      this.props.getImages(nextProps.type);
    }
  }

  componentDidUpdate() {
    $('.loading').css('display', 'block');
    $('.img_items').css('display', 'none');
    setTimeout(() => {
      $('.loading').css('display', 'none');
      $('.img_items').css('display', 'flex');
    }, 1000);
  }

  onDeleteClick(e, id) {
    const confirm = window.confirm("Вы уверены, что хотите удалить фото?");

    if(confirm) {
      this.props.deleteImages(id);
    }
  }

  renderImage(img) {
    return (
      <div className="img_item" key={img._id} onClick={this.onImgClick}>
        <img src={img.path} alt="" />
        {this.props.admin && <span onClick={(e) => this.onDeleteClick(e, img._id)}>X</span>}
      </div>
    );
  }

  onImgClick(e) {
    const src = $(e.target).attr("src");
    const container = $('.selected_img');
    const img = $('.selected_img img')
    
    
    if($(e.target)[0].tagName == "SPAN") {
      return;
    }

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
    let images = '';
    if(Array.isArray(this.props.photos)) {
      images = this.props.photos.map((photo) => this.renderImage(photo));
    }
    else if(this.props.photos) {
      images = this.renderImage(this.props.photos);
    }

    return (
      <div>
        <div className='loading'>
          <div className='spinner'></div>
        </div>
        <div className='img_items'>
          <div className="selected_img" onClick={this.onImgClick}>
            <img src=""></img>
          </div>
          { images }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.photos };
}

export default connect(mapStateToProps, { getImages, deleteImages })(ImgContainer);