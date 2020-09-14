import React, { useState } from 'react';
import clsx from 'classnames';

import { Card, CardContent, Tabs, Tab } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TasksContent } from '../tasksContent/TasksContent';
import { TasksTab } from '../Tasks.types';

import { useStyles } from './TasksBody.styles';
import { TasksBodyProps } from './TasksBody.types';

export const TasksBody = ({ selectedMembers }: TasksBodyProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(TasksTab.Today);

  return (
    <Card className={clsx(classes.root, classes.flexColumn)}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab value={TasksTab.Today} label={formatMessage({ id: 'tasks.today' })} />
        <Tab value={TasksTab.NextWeek} label={formatMessage({ id: 'tasks.next_week' })} />
        <Tab value={TasksTab.Future} label={formatMessage({ id: 'tasks.future' })} />
        <Tab value={TasksTab.Overdue} label={formatMessage({ id: 'tasks.overdue' })} />
      </Tabs>
      <CardContent className={clsx(classes.noPadding, classes.flexColumn, classes.flexGrowOne)}>
        <TasksContent tab={activeTab} selectedMembers={selectedMembers} />
      </CardContent>
    </Card>
  );
};
