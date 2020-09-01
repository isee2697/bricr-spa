import React, { useState } from 'react';
import clsx from 'classnames';

import { SimpleSearch } from 'ui/molecules';
import { Grid, IconButton } from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { TasksNoTaskMessage } from '../tasksNoTaskMessage/TasksNoTaskMessage';
import { TasksSwimlane } from '../tasksSwimlane/TasksSwimlane';

import { useStyles } from './TasksContent.styles';

export const TasksContent = () => {
  const classes = useStyles();
  const [searchKey, setSearchKey] = useState('');

  return (
    <Grid container spacing={2} className={classes.root} direction="column">
      <Grid item xs={12} container alignItems="center" justify="space-between" className={classes.flexGrowZero}>
        <Grid item xs={3}>
          <TasksNoTaskMessage />
        </Grid>
        <Grid item>
          <Grid container>
            <SimpleSearch onChange={v => setSearchKey(v.currentTarget.value)} value={searchKey} />
            <IconButton classes={{ root: classes.sortIcon }}>
              <SwimlaneIcon color="inherit" />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ListIcon color="inherit" />
            </IconButton>
            <IconButton classes={{ root: classes.sortIcon }}>
              <ManageIcon color="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={clsx(classes.flexGrowOne, classes.flexRow)}>
        <TasksSwimlane />
      </Grid>
    </Grid>
  );
};
