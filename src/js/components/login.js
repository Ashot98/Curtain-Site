import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderField } from './designer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authUser } from '../actions/index';

class Login extends Component {
  onSubmit(values) {
    this.props.authUser(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='login_page'>
        <Link to='/' className='back_btn'><i className="fa fa-angle-left" aria-hidden="true"></i>Назад</Link>
        <form className='login_form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name='login' className='login' type='text' component={renderField} label='Логин:' />
          <Field name='password' className='password' type='password' component={renderField} label='Пароль:' />
          <button type='submit' className='login_btn'>Войти</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user
  }
}

Login = connect(mapStateToProps, { authUser })(Login);

export default reduxForm({
  form: 'login'
})(Login);