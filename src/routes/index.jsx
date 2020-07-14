import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" component={Home} isPrivate />
  </Switch>
);

export default Routes;
