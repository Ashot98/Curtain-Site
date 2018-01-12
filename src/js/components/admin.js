import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './login';

class Admin extends Component {
  render() {
    if(!this.props.isAuthenticated) {
      return <Login />
    }
    else
      return (
        <div> Admin </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user
  }
}

export default connect(mapStateToProps)(Admin);