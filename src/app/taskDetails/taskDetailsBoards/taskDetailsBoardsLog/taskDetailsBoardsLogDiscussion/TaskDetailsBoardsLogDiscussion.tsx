import React from 'react';

import { Grid, UserAvatar, Typography } from 'ui/atoms';

import { useStyles } from './TaskDetailsBoardsLogDiscussion.styles';

export const TaskDetailsBoardsLogDiscussion = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container spacing={2}>
        <Grid item>
          <UserAvatar name={'Mariusz Nowak'} size="medium" />
        </Grid>
        <Grid item className={classes.flexItem}>
          <Typography variant="h5" className={classes.username}>
            <b>Mariusz Nowak</b> July 1, 2020
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas enim vitae libero volutpat
            pharetra sit amet eget neque.
          </Typography>
          <Typography variant="h5">
            Proin faucibus sapien dolor, id efficitur dolor aliquet ut. Ut vestibulum felis eget pretium elementum.
            Vivamus vitae laoreet neque. Donec at accumsan velit. Nulla sollicitudin enim at blandit vestibulum
          </Typography>
          <Typography variant="h5">
            Aenean ut justo lorem. Nulla hendrerit tortor et ultrices eleifend. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
