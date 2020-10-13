import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { CostsContainer } from 'app/shared/prices';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';
import { PricesGeneralContainer } from 'app/shared/prices';

import { InterestsContainer } from './interests/InterestsContainer';

export const Prices = ({ onSidebarOpen, isSidebarVisible }: ProjectDetailsProps) => (
  <Switch>
    <Route
      default
      path={`${AppRoute.projectDetails}/prices`}
      exact
      render={() => <PricesGeneralContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
    />
    <Route
      default
      path={`${AppRoute.projectDetails}/prices/costs`}
      exact
      render={() => <CostsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
    />
    <Route
      default
      path={`${AppRoute.projectDetails}/prices/interests`}
      exact
      render={() => <InterestsContainer isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />}
    />
    <Redirect to={`${AppRoute.projectDetails}/prices`} />
  </Switch>
);
