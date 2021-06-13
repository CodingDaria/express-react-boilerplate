import React from 'react';
import { Route, Switch } from 'react-router';

import Component from './components/component';
import Test from './components/test';

const Root = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Component />} />
      <Route exact path="/test" component={() => <Test />} />
    </Switch>
  );
};

export default Root;
