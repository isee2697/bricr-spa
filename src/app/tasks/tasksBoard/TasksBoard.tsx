import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';

import { Box, Grid, Typography, Card, CardHeader, CardContent, Alert, Tabs, Tab, Scrollable } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksBoard.styles';

export const TasksBoard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Card className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label={formatMessage({ id: 'tasks.today' })} />
        <Tab label={formatMessage({ id: 'tasks.nextWeek' })} />
        <Tab label={formatMessage({ id: 'tasks.future' })} />
        <Tab label={formatMessage({ id: 'tasks.overdue' })} />
      </Tabs>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            List 1
          </Grid>
          <Grid item xs={3}>
            List 2
          </Grid>
          <Grid item xs={3}>
            List 3
          </Grid>
          <Grid item xs={3}>
            List 4
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
