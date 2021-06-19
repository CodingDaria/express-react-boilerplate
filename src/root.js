import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Component from './components/component';
import Test from './components/test';

const Root = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/component" />
      </Route>
      <Route exact path="/component" component={Component} />
      <Route exact path="/test" component={Test} />
    </Switch>
  );
};

export default Root;
