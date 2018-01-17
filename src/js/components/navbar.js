import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setActive } from '../actions/index';
import { connect } from 'react-redux';
import $ from 'jquery';

class Navbar extends Component {
  componentWillMount() {
    const url = window.location.href;
    const parser = document.createElement('a');
    parser.href = url;
    const page = parser.pathname.slice(1);
    
    switch(page) {
      case "services": case "contacts": case "call": case "catalog": 
        this.props.setActive(page);
        break;
      default:
        this.props.setActive("main");
    }
  }
  
  navPageSelect(page) {
    this.props.setActive(page);
  }
  
  onClickXS(){
    if(window.innerWidth > 560)
      return;
    
    let menu = $('.nav li').not('.logo');
    menu.stop().slideToggle('slow');
  }

  onCatClick() {
    if(window.innerWidth > 560)
      return;

    const submenu = $('.catalog .submenu');
    submenu.stop().slideToggle('slow');

    $('.work_examples .submenu').css('display', 'none');
  }

  onWorkClick() {
    if(window.innerWidth > 560)
      return;

    const submenu = $('.work_examples .submenu');

    submenu.stop().slideToggle('slow');
  }
  
  render() {
    return (
      <div className='wrapper'>
        <ul className='nav'>
          <li className='logo' onClick={this.onClickXS}>
            <hr />
            <span id='logo-pic'>Jakkard</span>
            <hr />
            </li>
          <li className={this.props.active == 'main' ? 'active' : ''}>
            <Link to='/' onClick={() => this.navPageSelect('main')}>Главная</Link>
          </li>
          <li className={this.props.active == 'catalog' ? 'active catalog' : 'catalog'} >
            <a onClick={(e) => {e.preventDefault();this.onCatClick();}}>Каталог</a>
            <ul className='submenu'>
              <li className='work_examples'>
                <a onClick={(e) => {e.preventDefault();this.onWorkClick();}}>Наши Работы</a>
                <ul className='submenu'>
                  <li>
                    <Link to='/livingroom' onClick={() => this.navPageSelect('catalog')}>Гостиная</Link>
                  </li>
                  <li>
                    <Link to='/diningroom' onClick={() => this.navPageSelect('catalog')}>Столовая</Link>
                  </li>
                  <li>
                    <Link to='/bedroom' onClick={() => this.navPageSelect('catalog')}>Спальня</Link>
                  </li>
                  <li>
                    <Link to='/childroom' onClick={() => this.navPageSelect('catalog')}>Детская</Link>
                  </li>
                  <li>
                    <Link to='/cabinet' onClick={() => this.navPageSelect('catalog')}>Кабинет</Link>
                  </li>
                  <li>
                    <Link to='/ladder' onClick={() => this.navPageSelect('catalog')}>Лестничные пролеты</Link>
                  </li>
                  <li>
                    <Link to='/corp' onClick={() => this.navPageSelect('catalog')}>Корпоративные</Link>
                  </li>
                  <li>
                    <Link to='/interior' onClick={() => this.navPageSelect('catalog')}>Предметы интерьера</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/accessories' onClick={() => this.navPageSelect('catalog')}>Аксессуары</Link>
              </li>
              <li>
                <Link to='/cornice' onClick={() => this.navPageSelect('catalog')}>Карнизы</Link>
              </li>
              <li>
                <Link to='/textile' onClick={() => this.navPageSelect('catalog')}>Каталог тканей</Link>
              </li>
              <li>
                <Link to='/sketches' onClick={() => this.navPageSelect('catalog')}>Эскизы</Link>
              </li>
            </ul>
          </li>
          <li className={this.props.active == 'contacts' ? 'active' : ''}>
            <Link to='/contacts' onClick={() => this.navPageSelect('contacts')}>Контакты</Link>
          </li>
          <li className={this.props.active == 'about' ? 'active' : ''}>
            <Link to='/about' onClick={() => this.navPageSelect('about')}>О Нас</Link>
          </li>
          <li className={this.props.active == 'call' ? 'active' : ''}>
            <Link to='/call' onClick={() => this.navPageSelect('call')}>Вызвать Дизайнера</Link>
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