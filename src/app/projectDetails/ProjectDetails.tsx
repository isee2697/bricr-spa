import React from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid, NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { ProjectDetailsSidebarMenu } from './projectDetailsSidebarMenu/ProjectDetailsSidebarMenu';
import { Dashboard } from './sections/dashboard/Dashboard';

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.nc_sale' })} to={AppRoute.project} />
      <NavBreadcrumb title={'TODO: place here a project name'} to={AppRoute.projectDetails.replace(':id', id)} />
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <ProjectDetailsSidebarMenu />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Box padding={3}>
            <Switch>
              <Route path={`${AppRoute.projectDetails}/dashboard`} render={() => <Dashboard />} />
              <Redirect to={{ pathname: `${AppRoute.projectDetails}/dashboard` }} />
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
