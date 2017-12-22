import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const renderField = ({ input, label, type, className}) => {
  return (
    <div className={'form-item ' + className}>
      <label>{label}</label>
      <input {...input} type={type}  />
    </div>
  );
}

class Designer extends Component {
  componentWillMount() {

  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className='designer wrapper'>
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
        <form className='designer_form' onSubmit={handleSubmit}>
          <Field name='fullname' className='fullname' type='text' component={renderField} label='ФИО:' />
          <Field name='tel' className='tel' type='text' component={renderField} label='Телефон:' />
          <Field name='email' className='email' type='text' component={renderField} label='E-Mail:' />
          <div className='form-item addInfo'>
            <label>Ваше сообщение:</label>
            <Field name='add_info' component='textarea' />
          </div>
          <button type='submit'>Отправить</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(Designer);
