import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { active: "Главная" };
  }
  
  navPageSelect(event) {
    this.setState({ active: event.target.textContent });
  }
  
  render() {
    return (
      <div className='wrapper'>
        <ul className='nav'>
          <li className='logo'>Jakkard</li>
          <li className={this.state.active == 'Главная' ? 'active' : ''}>
            <Link to='/' onClick={this.navPageSelect.bind(this)}>Главная</Link>
          </li>
          <li className={this.state.active == 'Услуги' ? 'active' : ''}>
            <Link to='/services' onClick={this.navPageSelect.bind(this)}>Услуги</Link>
          </li>
          <li className={this.state.active == 'Контакты' ? 'active' : ''}>
            <Link to='/contacts' onClick={this.navPageSelect.bind(this)}>Контакты</Link>
          </li>
          <li className={this.state.active == 'Вызвать Дизайнера' ? 'active' : ''}>
            <Link to='/call' onClick={this.navPageSelect.bind(this)}>Вызвать Дизайнера</Link>
          </li>
          <li className={this.state.active == 'Навигация' ? 'active' : ''}>
            <Link to='/nav' onClick={this.navPageSelect.bind(this)}>Навигация</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;