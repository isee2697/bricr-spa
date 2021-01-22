import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Grid, Box, Typography } from 'ui/atoms';

import { ChartDetailProps } from './ChartDetail.types';
import { ChartDetailSidebarMenu } from './sidebarMenu/SidebarMenu';
import { Visualisation } from './visualisation/Visualisation';
import { ChartData } from './chartData/ChartData';
import { Preview } from './preview/Preview';

export const ChartDetail = ({ path, data, onUpdate, onAddSource, onRemoveSource }: ChartDetailProps) => {
  return (
    <Grid container spacing={0}>
      <ChartDetailSidebarMenu />
      <Grid item xs={12} sm={8} md={9} lg={10}>
        <Box p={3}>
          <Typography variant="h1">{data.name}</Typography>
          <Box pt={3}>
            <Switch>
              <Route path={`${path}/visualisation`} render={() => <Visualisation data={data} onUpdate={onUpdate} />} />
              <Route
                path={`${path}/data`}
                component={() => <ChartData data={data} onAddSource={onAddSource} onRemoveSource={onRemoveSource} />}
              />
              <Route path={`${path}/preview`} component={() => <Preview data={data} />} />
              <Redirect to={`${path}/visualisation`} />
            </Switch>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
