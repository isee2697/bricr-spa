import React, { useState } from 'react';
import groupBy from 'lodash/groupBy';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Card, CardContent, CardActions, IconButton, Button, Tabs, Tab, Scrollable, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { Task, TaskStatus } from 'api/types';
import { useLocale, useModalDispatch } from 'hooks';
import { GroupTitle } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardAgendaProps } from './DashboardAgenda.types';
import { useStyles } from './DashboardAgenda.styles';
import { DashboardTaskItem } from './DashboardTaskItem';

export const DashboardAgenda = ({ tasks }: DashboardAgendaProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { open } = useModalDispatch();

  const dateFormat = 'd LLLL';

  const tasksWithStatus = tasks.map(task => ({
    ...task,
    isActive: task.status !== TaskStatus.Done,
  }));

  const tasksByStatus = tasksWithStatus
    .filter(task => task.status !== TaskStatus.Done)
    .filter(task => !!task.deadline)
    .filter(task => DateTime.fromISO(task.deadline as string).toMillis() >= DateTime.local().toMillis());

  const grouped = groupBy(tasksByStatus, (task: Task) => {
    return task.deadline ? DateTime.fromISO(task.deadline).toFormat(dateFormat) : '-';
  });

  const sortedByDate = Object.keys(grouped).sort((dateA, dateB) => {
    return DateTime.fromString(dateA, dateFormat) > DateTime.fromString(dateB, dateFormat) ? 1 : -1;
  });

  const getGroupTaskItems = (taskItems: Task[]) =>
    taskItems.map((itemProps, key) => <DashboardTaskItem key={key} {...itemProps} />);

  return (
    <Card>
      <Tabs
        className={classes.tabs}
        onChange={(e, value) => setActiveTab(value)}
        value={activeTab}
        indicatorColor="primary"
      >
        <Tab label="Agenda" />
        <Tab label="Tasks" />
      </Tabs>
      <CardContent>
        <Scrollable className={classes.scrollable} width="auto" height={342}>
          {(tasks.length === 0 || activeTab === 0) && (
            <InfoSection emoji="🤔" className={classes.emptyCard}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'dashboard.agenda.empty_title',
                })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'dashboard.agenda.empty_description',
                })}
              </Typography>
            </InfoSection>
          )}
          {activeTab === 1 &&
            sortedByDate.map((dateGroup, key) => {
              return (
                <div className={classes.group} key={key}>
                  <GroupTitle date={dateGroup} dateFormat={dateFormat} />
                  {getGroupTaskItems(grouped[dateGroup])}
                </div>
              );
            })}
        </Scrollable>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          className={classes.moreButton}
          onClick={() => {
            if (activeTab === 1) {
              push(AppRoute.tasks);
            }
          }}
        >
          {formatMessage({ id: 'date.view_more' })}
        </Button>
        <IconButton
          aria-label="add"
          color="primary"
          size="small"
          onClick={() => {
            if (activeTab === 1) {
              open('create-new-task');
            }
          }}
        >
          <AddIcon color="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
