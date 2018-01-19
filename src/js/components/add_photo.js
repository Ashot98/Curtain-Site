import React, { Component } from 'react';

class AddPhoto extends Component {
  render() {
    return (
      <form ref='uploadForm' 
        id='uploadForm' 
        action='http://localhost:8080/api/photos/type' 
        method='post' 
        encType="multipart/form-data">
        <input type="file" name="sampleFile"  multiple/>
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
    );
  }
}

export default AddPhoto;