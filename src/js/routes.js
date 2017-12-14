import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/app';
import Main from './components/main';
import Contacts from './components/contacts';
import Information from './components/information';
import Accessories from './components/accessories';
import Cornices from './components/cornices';

export default (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/about' component={Information} />
      <Route path='/accessories' component={Accessories} />
      <Route path='/cornice' component={Cornices} />
    </Switch>
)