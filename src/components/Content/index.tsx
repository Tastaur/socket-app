import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { useHistoryDataContext } from '../../context/HistoryDataContext';
import { Table } from '../Table';


export const Content = () => {
  const { error } = useHistoryDataContext();
  if (error){
    return null;
  }
  return (
      <Switch>
          <Route path={'/history'} exact={true}>
              <Table/>
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
