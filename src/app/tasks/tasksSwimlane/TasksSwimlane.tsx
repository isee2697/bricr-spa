import React from 'react';
import clsx from 'classnames';

import { Grid, IconButton, Emoji } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';

import { useStyles } from './TasksSwimlane.styles';

export const TasksSwimlane = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={3}>
        <Grid container className={classes.tasksSwimlaneColumn}>
          <Grid item className={clsx(classes.columnName, classes.flexGrowOne, 'grayLight')}>
            <Grid container justify="space-between">
              <Grid item className={clsx(classes.columnName, classes.backGrayLight, classes.gray)}>
                <Emoji>{'⏱ To do'}</Emoji>
              </Grid>
              <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={clsx(classes.columnName, classes.backYellowLight, classes.yellow)}>
                <Emoji>{'🔥 In progress'}</Emoji>
              </Grid>
              <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={clsx(classes.columnName, classes.backRedLight, classes.red)}>
                <Emoji>{'⛔️ Blocked'}</Emoji>
              </Grid>
              <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
                <IconButton className={classes.noPadding}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container className={classes.tasksSwimlaneColumn}>
          <Grid item className={classes.flexGrowOne}>
            <Grid container justify="space-between">
              <Grid item className={clsx(classes.columnName, classes.backGreenLight, classes.green)}>
                <Emoji>{'✅ Done'}</Emoji>
              </Grid>
              <Grid item className={clsx(classes.flexGrowOne, classes.textAlignRight)}>
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
