import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/app';
import Main from './components/main';
import Contacts from './components/contacts';
import Information from './components/information';

export default (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/about' component={Information} />
    </Switch>
)