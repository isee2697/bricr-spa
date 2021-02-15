import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { AllocateCriteriaProps } from './AllocateCriteria.types';
import { AllocateCriteriaListContainer } from './allocateCriteriaList/AllocateCriteriaListContainer';
import { EditAllocateCriteriaContainer } from './editAllocateCriteria/EditAllocateCriteriaContainer';

export const AllocateCriteria = ({ type }: AllocateCriteriaProps) => {
  return (
    <Switch>
      <Route path={`${AppRoute.settings}/:type/:criteriaId`} render={() => <EditAllocateCriteriaContainer />} />
      <Route exact path={`${AppRoute.settings}/:type`} render={() => <AllocateCriteriaListContainer type={type} />} />
      <Redirect to={`${AppRoute.settings}/:type`} />
    </Switch>
  );
};
