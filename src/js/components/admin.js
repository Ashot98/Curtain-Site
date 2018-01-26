import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from "../../../config";
import $ from 'jquery';

import { logoutUser } from '../actions/index';

import Login from './login';
import ImgContainer from './img_container';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { type: 'general', header: 'Главная' };
  }

  logout() {
    const url = `${config.api_server}logout`;
    const token = JSON.parse(localStorage.jakkardUserInfo).jwtToken;
    axios.post(url, { token: token });
    this.props.logout();
    location.reload();
  }
  onMenuItemSelect(e, type) {
    this.setState({ type, header: $(e.target).html() });
  }

  render() {
    if(!this.props.isAuthenticated) {
      return <Login />
    }
    else
      return (
        <div className='admin'>
          <Link to='/' className='back_btn'><i className="fa fa-angle-left" aria-hidden="true"></i>Назад</Link>
          <div className='buttons'>
            <Link to='/addphoto' className='add_btn'>Добавить фото</Link>
            <button onClick={this.logout.bind(this)} className='logout_btn'>Выйти</button>
          </div>
          <div className='menu'>
            <button onClick={(e) => this.onMenuItemSelect(e,'general')}>Главная</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'livingroom')}>Гостиная</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'diningroom')}>Столовая</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'bedroom')}>Спальня</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'childroom')}>Детская</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'cabinet')}>Кабинет</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'ladder')}>Лестничные Пролеты</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'corp')}>Корпоративные</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'interior')}>Предметы Интерьера</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'accessories')}>Аксессуары</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'cornices')}>Карнизы</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'textile')}>Каталог Тканей</button>
            <button onClick={(e) => this.onMenuItemSelect(e,'sketches')}>Эскизы</button>
          </div>
          <div className='content wrapper'>
            <h3>{this.state.header}</h3>
            <hr />
            <ImgContainer type={this.state.type} admin />
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user && !state.user.error
  }
}

export default connect(mapStateToProps, { logout: logoutUser })(Admin);