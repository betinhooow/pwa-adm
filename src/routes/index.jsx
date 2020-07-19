import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Table from '../pages/Table/Table';
import SignIn from '../pages/SignIn/SignIn';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/table" component={Table} isPrivate />
  </Switch>
);

export default Routes;
