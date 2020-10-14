import React, { useState } from 'react';
import clsx from 'classnames';

import { TaskFullSummaryResult } from 'api/types';
import { Badge, Card, CardContent, Tab, Tabs } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TasksTab } from '../Tasks.types';
import { TaskViewContainer } from '../taskView/TaskViewContainer';

import { useStyles } from './TasksBody.styles';
import { TasksBodyProps } from './TasksBody.types';

export const TasksBody = ({
  members,
  selectedMembers,
  tasksFullSummary = {
    today: 0,
    nextWeek: 0,
    overdue: 0,
    future: 0,
  },
}: TasksBodyProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(TasksTab.Today);

  const {
    today: todayTaskCount,
    nextWeek: nextWeekTaskCount,
    future: futureTaskCount,
    overdue: overdueTaskCount,
  } = tasksFullSummary as TaskFullSummaryResult;

  return (
    <Card className={clsx(classes.root, classes.flexColumn)}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          value={TasksTab.Today}
          label={
            todayTaskCount > 0 ? (
              <Badge badgeContent={`${todayTaskCount}`} color="error" classes={{ badge: classes.badge }}>
                {formatMessage({ id: 'tasks.today' })}
              </Badge>
            ) : (
              formatMessage({ id: 'tasks.today' })
            )
          }
        />
        <Tab
          value={TasksTab.NextWeek}
          label={
            <Badge badgeContent={`${nextWeekTaskCount}`} color="primary" classes={{ badge: classes.badge }}>
              {formatMessage({ id: 'tasks.next_week' })}
            </Badge>
          }
        />
        <Tab
          value={TasksTab.Future}
          label={
            <Badge badgeContent={`${futureTaskCount}`} color="primary" classes={{ badge: classes.badge }}>
              {formatMessage({ id: 'tasks.future' })}
            </Badge>
          }
        />
        <Tab
          value={TasksTab.Overdue}
          label={
            <Badge
              badgeContent={`${overdueTaskCount}`}
              color="error"
              classes={{ badge: clsx(classes.badge, activeTab !== TasksTab.Overdue && 'default') }}
            >
              {formatMessage({ id: 'tasks.overdue' })}
            </Badge>
          }
        />
      </Tabs>
      <CardContent className={clsx(classes.noPadding, classes.flexColumn, classes.flexGrowOne)}>
        <TaskViewContainer tab={activeTab} members={members} selectedMembers={selectedMembers} />
      </CardContent>
    </Card>
  );
};
