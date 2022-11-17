import React from 'react';
import { Redirect, Route, Switch } from 'react-router';


export const Content = () => {
  return (
      <Switch>
          <Route path={'/history'} exact={true}>
              <div>asd</div>
          </Route>
          <Route path={'/overview'} exact={true}>
              <div>sdasd</div>
          </Route>
          <Route path={'*'}>
              <Redirect to={'/history'}/>
          </Route>
      </Switch>
  );
};
