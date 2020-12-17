import React from 'react';

import { Grid } from 'ui/atoms';

import { useStyles } from './Boards.styles';
import { Properties } from './properties/Properties';
import { Timeline } from './timeline/Timeline';
import { Agenda } from './agenda/Agenda';
import { Brokers } from './brokers/Brokers';

export const Boards = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={8}>
        <Properties />
        <Timeline />
      </Grid>
      <Grid item xs={12} md={4}>
        <Agenda />
        <Brokers />
      </Grid>
    </Grid>
  );
};
