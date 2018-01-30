import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import Login from './login';

class AddPhoto extends Component {
  componentDidMount() {
    if($('.add_photo').length) {
      $('.file_select').change(( e ) => {
        const input = $('.file_select');
        let fileName;
        if(input[0].files.length > 1) {
          fileName = input.attr('data-multiple-caption').replace('{count}', input[0].files.length)
        }
        else if(input[0].files.length == 1) {
          fileName = input[0].files[0].name;
        }
        $('#file_label').html(fileName);
      })
    }
  }

  componentDidUpdate() {
    if($('.add_photo').length) {
      $('.file_select').change(( e ) => {
        const input = $('.file_select');
        let fileName;
        if(input[0].files.length > 1) {
          fileName = input.attr('data-multiple-caption').replace('{count}', input[0].files.length)
        }
        else if(input[0].files.length == 1) {
          fileName = input[0].files[0].name;
        }
        $('#file_label').html(fileName);
      })
    }
  }

  render() {
    let uploadPage;
    if(this.props.isAuthenticated) {
       uploadPage = (
        <div className='add_photo'>
          <Link to='/admin' className='back_btn'><i className="fa fa-angle-left" aria-hidden="true"></i>Назад</Link>
          <form ref='uploadForm' 
            className='add_form' 
            id='uploadForm' 
            action='http://188.225.74.179:8080/api/photos/type' 
            method='post' 
            encType="multipart/form-data">
            <input className='file_select' 
                  type="file" 
                  id='file' 
                  name="sampleFile" 
                  data-multiple-caption="{count} файлов выбрано"
                  multiple/>
            <label id='file_label' htmlFor='file'>Выбрать файлы</label>
            <select name='selType' id='softflow'>
              <option>accessories</option>
              <option>bedroom</option>
              <option>cabinet</option>
              <option>childroom</option>
              <option>cornices</option>
              <option>corp</option>
              <option>diningroom</option>
              <option>general</option>
              <option>interior</option>
              <option>ladder</option>
              <option>livingroom</option>
              <option>sketches</option>
              <option>textile</option>
            </select>
            <input type='submit' id="upload_btn" value='Загрузить' />
          </form>
        </div>
      );
    }
    else {
      uploadPage =  <Login />
    }
    return uploadPage;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user && !state.user.error
  }
}

export default connect(mapStateToProps)(AddPhoto);