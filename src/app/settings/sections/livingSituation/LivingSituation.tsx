import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { AddLivingSituationTypeModalContainer } from './addLivingSituationTypeModal/AddLivingSituationTypeModalContainer';
import { BaseChecklistContainer } from './baseChecklist/BaseChecklistContainer';
import { ChecklistContainer } from './checklist/ChecklistContainer';

export const LivingSituation = () => {
  return (
    <>
      <Switch>
        <Route exact path={AppRoute.livingSituation} render={() => <BaseChecklistContainer />} />
        <Route path={`${AppRoute.livingSituation}/:type`} render={() => <ChecklistContainer />} />
        <Redirect to={AppRoute.livingSituation} />
      </Switch>
      <AddLivingSituationTypeModalContainer />
    </>
  );
};
