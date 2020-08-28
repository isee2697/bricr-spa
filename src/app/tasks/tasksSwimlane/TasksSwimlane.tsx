import React from 'react';

import { Grid, IconButton } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';

import { useStyles } from './TasksSwimlane.styles';

export const TasksSwimlane = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={3}>
        <Grid container spacing={1} className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={classes.flexGrowOne}>
                ⏱ To do
              </Grid>
              <Grid item>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={1} className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={classes.flexGrowOne}>
                🔥 In progress
              </Grid>
              <Grid item>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={1} className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={classes.flexGrowOne}>
                ⛔️ Blocked
              </Grid>
              <Grid item>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container spacing={1} className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={classes.flexGrowOne}>
                ✅ Done
              </Grid>
              <Grid item>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
