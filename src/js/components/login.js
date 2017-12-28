import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from './designer';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div class='login_page'>
        <Link to='/' className='back_btn'><i class="fa fa-angle-left" aria-hidden="true"></i>Назад</Link>
        <form className='login_form' onSubmit={handleSubmit}>
          <Field name='login' className='login' type='text' component={renderField} label='Логин:' />
          <Field name='password' className='password' type='password' component={renderField} label='Пароль:' />
          <button type='submit' className='login_btn'>Войти</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login'
})(Login);