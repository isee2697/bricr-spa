import React, { useState } from 'react';
import clsx from 'classnames';
import { useTheme } from '@material-ui/core';

import { SimpleSearch } from 'ui/molecules';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Alert,
  Tabs,
  Tab,
  Scrollable,
  IconButton,
} from 'ui/atoms';
import { ListIcon } from 'ui/atoms/icons/list/ListIcon';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { SwimlaneIcon } from 'ui/atoms/icons/swimlane/SwimlaneIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksBoard.styles';

export const TasksBoard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);
  const [value, setValue] = useState('');

  return (
    <Card className={clsx(classes.root, classes.flexColumn)}>
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
      <CardContent className={clsx(classes.flexColumn, classes.flexGrowOne)}>
        <Grid container spacing={2} className={classes.flexGrowOne} direction="column">
          <Grid item xs={12} container alignItems="center" justify="space-between" className={classes.flexGrowZero}>
            <Grid item xs={3}>
              <Grid container direction="column" className={classes.tasksStatus} alignItems="center">
                <Grid item className={classes.tasksStatusLogo}>
                  🎉
                </Grid>
                <Grid item className={classes.tasksStatusMessage}>
                  Ta-da!
                </Grid>
                <Grid item className={classes.tasksStatusMessage}>
                  You are up to date
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <SimpleSearch onChange={v => setValue(v.currentTarget.value)} value={value} />
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
            <Grid container spacing={2} className={classes.flexRow}>
              <Grid item xs={3}>
                <Grid container spacing={1} className={classes.taskItemsColumn}>
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
                <Grid container spacing={1} className={classes.taskItemsColumn}>
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
                <Grid container spacing={1} className={classes.taskItemsColumn}>
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
                <Grid container spacing={1} className={classes.taskItemsColumn}>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
