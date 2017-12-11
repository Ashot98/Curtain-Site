import React, { Component } from 'react';
import $ from 'jquery';

class Contacts extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.contacts').css({
        "opacity": "1"
      });
    }, 10);
  }
  
  renderMap() {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [45.06850572454767, 38.95298090999997], 
        zoom: 18
      })
      const placemark = new ymaps.Placemark([45.06860572454767, 38.95298090999997], { 
        hintContent: 'Жаккард!', 
        balloonContent: 'Салон штор Жаккард',
        }, {
        iconColor: '#7d7468'
      });

        map.geoObjects.add(placemark);
    })
  }
  
  render() {
    return (
      <div className='contacts'>
        <div className="wrapper">
          <h3>Контактная Информация</h3>
          <hr />
          <div className="info">
            <div className="info_item">
              <div className="info_icon">
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="info_content">
                <p className='info_header'>Телефон</p>
                <p>8-918-999-0381</p>
                <p>8-999-63-00522</p>
              </div>
            </div>
            <div className="info_item">
              <div className="info_icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="info_content">
                <p className='info_header'>E-Mail</p>
                <p>salon_jakkard@mail.ru</p>
              </div>
            </div>
            <div className="info_item">
              <div className="info_icon">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </div>
              <div className="info_content">
                <p className='info_header'>WhatsApp/Viber</p>
                <p>8-999-63-00522</p>
              </div>
            </div>
            <div className="info_item">
              <div className="info_icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="info_content">
                <p className='info_header'>Адрес</p>
                <p>г. Краснодар </p>
                <p>ул. Архитектора Петина 18/1 </p>
              </div>
            </div>
          </div>
          <div id='map'>
            {this.renderMap()}
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;