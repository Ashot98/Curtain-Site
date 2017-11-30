import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import Main from './components/main';
import Contacts from './components/contacts';

export default (
  <div>
    <Route extact path='/' component={Main} />
    <Route path='/contacts' component={Contacts} />
  </div>
)