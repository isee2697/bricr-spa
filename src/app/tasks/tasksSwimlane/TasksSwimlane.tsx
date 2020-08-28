import React from 'react';

import { Grid, IconButton, Emoji } from 'ui/atoms';
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
                <Emoji>{'⏱ To do'}</Emoji>
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
                <Emoji>{'🔥 In progress'}</Emoji>
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
                <Emoji>{'⛔️ Blocked'}</Emoji>
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
                <Emoji>{'✅ Done'}</Emoji>
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
