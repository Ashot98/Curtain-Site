import React, { Children } from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/app';
import Main from './components/main';
import Contacts from './components/contacts';
import Information from './components/information';
import LivingRoom from './components/living_room';
import DiningRoom from './components/dining_room';
import BedRoom from './components/bedroom';
import ChildRoom from './components/childroom';
import Cabinet from './components/cabinet';
import Ladder from './components/ladder';
import Corp from './components/corp';
import Interior from './components/interior';
import Accessories from './components/accessories';
import Cornices from './components/cornices';
import Textile from './components/textile';
import Sketches from './components/sketches';
import Designer from './components/designer';
import Admin from './components/admin';
import AddPhoto from './components/add_photo';

export default (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/about' component={Information} />
      <Route path='/livingroom' component={LivingRoom} />
      <Route path='/diningroom' component={DiningRoom} />
      <Route path='/bedroom' component={BedRoom} />
      <Route path='/childroom' component={ChildRoom} />
      <Route path='/cabinet' component={Cabinet} />
      <Route path='/ladder' component={Ladder} />
      <Route path='/corp' component={Corp} />
      <Route path='/interior' component={Interior} />
      <Route path='/accessories' component={Accessories} />
      <Route path='/cornice' component={Cornices} />
      <Route path='/textile' component={Textile} />
      <Route path='/sketches' component={Sketches} />
      <Route path='/call' component={Designer} />
      <Route path='/admin' component={Admin} />
      <Route path='/addphoto' component={AddPhoto} />
    </Switch>
)