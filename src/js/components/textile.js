import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Textile extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.textile').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div id='scroll' className='textile wrapper'>
        <h3>Каталог тканей</h3>
        <hr />
        <p>
          В нашем ассортименте более 5000 видов тканей под заказ и более 1000 в наличии на складе. Вот лишь некоторые из них:
        </p>
        <p>
          Обращаем ваше внимание, что цветопередача примера ткани на мониторе компьютера отличается от цвета ткани  при естественном освещении. Рекомендуется выбирать материал ткани по образцу у дизайнера или в салоне. Возможность выезда дизайнера с образцами — уточняйте по телефону. 
        </p>
        <p>+7-918-999-0381, +7-999-630-0522</p>
        <ImgContainer type='textile'/>
      </div>
    );
  }
}

export default Textile;