import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Table from '../pages/Table/Table';
import SignIn from '../pages/SignIn/SignIn';
import Home from '../pages/Home/Home';
import Modal from '../pages/Modal/Modal';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/table" component={Table} isPrivate />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/modal" component={Modal} isPrivate />
  </Switch>
);

export default Routes;
