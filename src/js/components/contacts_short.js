import React, { Component } from 'react';

class ContactsShort extends Component {
  render() {
    return (
      <div className='contacts_main'>
        <div className="wrapper">
          <h3>Контакты</h3>
          <hr />
          <p id="town">г. Краснодар</p>
          <p id="street">ул. Архитектора Петина 18/1</p>
          <p id="tel">тел.: 8-918-999-0381</p>
          <p id="tel">тел.: 8-999-63-00522</p>
          <p id="mail">почта: salon_jakkard@mail.ru</p>
          <p id="viber">viber / WhatsApp: 8-999-63-00522</p>
        </div>
      </div>
    );
  }
}

export default ContactsShort;