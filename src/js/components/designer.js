import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import $ from 'jquery';
import axios from 'axios';

import config from '../../../config';

export const renderField = ({ input, label, type, className, meta: { touched, error, warning }}) => {
  const inputClass = (touched && error) ? 'err_req' : '';
  return (
    <div className={'form_item ' + className}>
      <label>{label}</label>
      <div className='form_elem'>
        <input {...input} type={type} className={inputClass}  />
        {touched &&
          (error && <span>{error}</span>)}
      </div>
    </div>
  );
}

const validate = values => {
  const errors = {};
  if(!values.fullname) {
    errors.fullname = 'Поле должно быть заполнено!'
  }
  if(!values.tel) {
    errors.tel = 'Поле должно быть заполнено!'
  }
  if(!values.email) {
    errors.email = 'Поле должно быть заполнено!'
  }

  return errors;
}

class Designer extends Component {
  componentDidMount() {
    setTimeout(() => {
      $('.designer').css({
        "opacity": "1"
      });
    }, 10);
  }

  onSubmit(values) {
    const { reset } = this.props;
    axios.post(`${config.api_server}/designer`, values).then(
      result => { 
        this.showInfo(true);
        reset();
      },
      error => { 
        this.showInfo(false);
      }
    );
    
  }

  showInfo(success) {
    if(success) {
      $('.info_block').removeClass('error').addClass('success').css('display', 'flex');
      $('.info_msg').html('Письмо отправлено! Наш сотрудник свяжется с вами. Спасибо за проявленный интерес.');
    }
    else {
      $('.info_block').removeClass('success').addClass('error').css('display', 'flex');
      $('.info_msg').html('Письмо не отправлено! Пожалуйста, попробуйте еще раз.');
    }

    setTimeout(() => {
      $('.info_block').css('display', 'none');
    }, 4000);
  }
  
  hidePopup() {
    $('.designer_popup').removeClass('opened');
    $('body').css('overflow', 'auto');
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <div id='scroll' className='designer wrapper'>
        <h3>Вызвать Дизайнера</h3>
        <hr />
        <p>
          Уже 5 лет Салон штор  «Jakkard»  дарит уют квартирам, офисам, ресторанам, школам, детским садам. Поэтому можем смело заявить, что предоставим вам профессионалов своего дела.
        </p>
        <p>
          Вам не нужно никуда ехать. Дизайнер приедет с образцами материалов, с которыми мы работаем.  Вас  обрадует большой выбор тканей из Испании, Турции, Германии, Франции, Индии, а также карнизов из Дании, Германии, Индии, России. Не отчаивайтесь, если нужной ткани не оказалось в наличии, мы работаем и под заказ.
        </p>
        <p>
          Уже на первой встрече вы сможете ознакомиться с договором, в котором четко прописаны материалы, цены, сроки.
        </p>
        <p>
          Вы сможете ознакомиться с нашим каталогом и выбрать готовое решение, либо придумать ваши идеальные шторы вместе с дизайнером прямо в день встречи.
        </p>
        <p>
          А самое главное, что выезд дизайнера бесплатный и совсем неважно, будете вы заказывать шторы у нас или нет.
        </p>
        <p>
          (* - объязательные поля)
        </p>
        <div className='info_block'>
          <span className='info_msg'></span>
        </div>
        <form className='designer_form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name='fullname' className='fullname' type='text' component={renderField} label='*ФИО:' />
          <Field name='tel' className='tel' type='text' component={renderField} label='*Телефон:' />
          <Field name='email' className='email' type='text' component={renderField} label='*E-Mail:' />
          <div className='form_item addInfo'>
            <label>Ваше сообщение:</label>
            <Field name='add_info' component='textarea' />
          </div>
          <button type='submit' className={invalid ? 'btn_disable' : ''}>Отправить</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  validate
})(Designer);
