import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/app';
import Main from './components/main';
import Contacts from './components/contacts';

export default (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contacts' component={Contacts} />
    </Switch>
)