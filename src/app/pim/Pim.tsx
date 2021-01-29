import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { PimDashboardContainer } from 'app/pim/pimDashboard/PimDashboardContainer';
import { PimListContainer } from 'app/pim/PimListContainer';
import { PimSidebarMenu } from 'app/pim/pimSidebarMenu/PimSidebarMenu';
import { Grid } from 'ui/atoms';
import { ProjectContainer } from 'app/project/ProjectContainer';

import { PimTypes } from './dictionaries';

export const Pim = () => {
  return (
    <Grid container spacing={0}>
      <PimSidebarMenu types={PimTypes} />
      <Grid item xs={12} md={9} lg={10}>
        <Switch>
          <Route exact path={`${AppRoute.pim}/dashboard`} component={PimDashboardContainer} />
          {PimTypes.map(item => (
            <Route
              exact
              path={`${AppRoute.pim}/${item.name}`}
              component={item.isProject ? ProjectContainer : PimListContainer}
            />
          ))}
          <Route exact path={`${AppRoute.pim}/purchase`} component={PimListContainer} />
          <Redirect to={`${AppRoute.pim}/dashboard`} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Pim;
