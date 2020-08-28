import React, { useState } from 'react';
import clsx from 'classnames';
import { useTheme } from '@material-ui/core';

import { Card, CardContent, Tabs, Tab } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { TasksContent } from '../tasksContent/TasksContent';

import { useStyles } from './TasksBody.styles';

export const TasksBody = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);

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
        <TasksContent />
      </CardContent>
    </Card>
  );
};
