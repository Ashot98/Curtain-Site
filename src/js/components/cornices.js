import React, { Component } from 'react';
import $ from 'jquery';

import ImgContainer from './img_container';

class Accessories extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.cornices').css({
        "opacity": "1"
      });
    }, 10);
  }

  render() {
    return (
      <div className='cornices wrapper'>
        <h3>Карнизы</h3>
        <hr />
        <p>
          В ассортименте нашего салона имеются карнизы различных групп. От эксклюзивных до самых простых и практичных на сегодняшний день. 
        </p>
        <p>
          Категория эксклюзивных карнизов уникальна по форме и дизайну. Изделия изготавливаются штучно по принципу «hand made» из качественной латуни с использованием кристаллов. Для защиты от коррозии латунь покрывается лаком. Популярен так же на сегодняшний день материал - полиуретан. Некоторые модели кронштейнов, держателей выполнены с применением металлических частей или полностью из металла. В этой серии используются рифленые штанги из алюминия или  комбинированные из полиуретана с алюминиевым сердечником. По мимо привычных материалов в наличии имеются карнизы в изготовлении которых используются стекло различных форм, размеров и цветов; фарфор, покрытый эмалью и расписанный в ручную; использование камней природного происхождения для создания оригинальных и эксклюзивных дизайнов. Широко пользуются спросом карнизы, выполненные в классическом стиле с применением литых компонентов. И конечно же не остаются без внимания модели выполненные как целиком из металла так и с использованием страз и кристаллов.
        </p>
        <ImgContainer type='cornices'/>
      </div>
    );
  }
}

export default Accessories;