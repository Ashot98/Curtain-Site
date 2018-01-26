import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import Login from './login';

class AddPhoto extends Component {
  componentDidMount() {
    $(document).ready(function(){
      const elem = $('.add_photo');
      console.log(elem);
    })
  }

  render() {
    if(!this.props.isAuthenticated) {
      return <Login />
    }
    return (
      <div className='add_photo'>
        <form ref='uploadForm' 
          className='add_form' 
          id='uploadForm' 
          action='http://localhost:8080/api/photos/type' 
          method='post' 
          encType="multipart/form-data">
          <input className='file_select' 
                 type="file" 
                 id='file' 
                 name="sampleFile" 
                 data-multiple-caption="{count} files selected"
                 multiple/>
          <label htmlFor='file'>Выбрать файлы</label>
          <select name='selType'>
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
          <input type='submit' value='Upload!' />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user && !state.user.error
  }
}

export default connect(mapStateToProps)(AddPhoto);