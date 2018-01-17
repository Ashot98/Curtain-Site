import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from "../../../config";

import Login from './login';
import ImgContainer from './img_container';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = { type: 'general' };
  }

  logout() {
    const url = `${config.api_server}logout`;
    axios.post(url);
  }

  onMenuItemSelect(type) {
    this.setState({ type });
  }

  render() {
    // if(!this.props.isAuthenticated) {
    //   return <Login />
    // }
    // else
      return (
        <div className='admin'>
          <div className='menu'>
            <button onClick={() => this.onMenuItemSelect('general')}>Главная</button>
            <button onClick={() => this.onMenuItemSelect('livingroom')}>Гостиная</button>
            <button onClick={() => this.onMenuItemSelect('diningroom')}>Столовая</button>
            <button onClick={() => this.onMenuItemSelect('bedroom')}>Спальня</button>
            <button onClick={() => this.onMenuItemSelect('childroom')}>Детская</button>
            <button onClick={() => this.onMenuItemSelect('cabinet')}>Кабинет</button>
            <button onClick={() => this.onMenuItemSelect('ladder')}>Лестничные Пролеты</button>
            <button onClick={() => this.onMenuItemSelect('corp')}>Корпоративные</button>
            <button onClick={() => this.onMenuItemSelect('interior')}>Предметы Интерьера</button>
            <button onClick={() => this.onMenuItemSelect('accessories')}>Аксессуары</button>
            <button onClick={() => this.onMenuItemSelect('cornices')}>Карнизы</button>
            <button onClick={() => this.onMenuItemSelect('textile')}>Каталог Тканей</button>
            <button onClick={() => this.onMenuItemSelect('sketches')}>Эскизы</button>
          </div>
          <div className='content'>
            <ImgContainer type={this.state.type} />
          </div>
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user
  }
}

export default connect(mapStateToProps)(Admin);