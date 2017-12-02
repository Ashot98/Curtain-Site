import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setActive } from '../actions/index';
import { connect } from 'react-redux';

class Navbar extends Component {
  componentWillMount() {
    const url = window.location.href;
    const parser = document.createElement('a');
    parser.href = url;
    const page = parser.pathname.slice(1);
    
    switch(page) {
      case "services": case "contacts": case "call": 
        this.props.setActive(page);
        break;
      default:
        this.props.setActive("main");
    }
  }
  
  navPageSelect(page) {
    this.props.setActive(page);
  }
  
  render() {
    return (
      <div className='wrapper'>
        <ul className='nav'>
          <li className='logo'>Jakkard</li>
          <li className={this.props.active == 'main' ? 'active' : ''}>
            <Link to='/' onClick={() => this.navPageSelect('main')}>Главная</Link>
          </li>
          <li className={this.props.active == 'services' ? 'active' : ''}>
            <Link to='/services' onClick={() => this.navPageSelect('services')}>Услуги</Link>
          </li>
          <li className={this.props.active == 'contacts' ? 'active' : ''}>
            <Link to='/contacts' onClick={() => this.navPageSelect('contacts')}>Контакты</Link>
          </li>
          <li className={this.props.active == 'call' ? 'active' : ''}>
            <Link to='/call' onClick={() => this.navPageSelect('call')}>Вызвать Дизайнера</Link>
          </li>
          <li className={this.props.active == 'nav' ? 'active' : ''}>
            <Link to='/nav' onClick={() => this.navPageSelect('nav')}>Навигация</Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { active: state.active };
}

export default connect(mapStateToProps, { setActive })(Navbar);