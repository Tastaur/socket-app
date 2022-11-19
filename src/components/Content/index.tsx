import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CircularProgress } from '@mui/material';

import { useHistoryDataContext } from '../../context/HistoryDataContext';


const Overview = lazy(() => import('../Overview/lazy'));
const Table = lazy(() => import('../Table/lazy'));

export const Content = () => {
  const { error } = useHistoryDataContext();
  if (error){
    return null;
  }
  return (
    <Suspense fallback={<CircularProgress/>}>
      <Switch>
        <Route path={'/history'} exact={true}>
          <Table/>
        </Route>
        <Route path={'/overview'} exact={true}>
          <Overview/>
        </Route>
        <Route path={'*'}>
          <Redirect to={'/history'}/>
        </Route>
      </Switch>
    </Suspense>
  );
};
