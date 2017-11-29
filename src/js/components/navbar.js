import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { active: "main" };
  }
  
  render() {
    return (
      <div className='wrapper'>
        <ul className='nav'>
          <li className='logo'>Jakkard</li>
          <li><a href='#'>Главная</a></li>
          <li><a href='#'>Услуги</a></li>
          <li><a href='#'>Контакты</a></li>
          <li><a href='#'>Вызвать дизайнера</a></li>
          <li><a href='#'>Навигация</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;