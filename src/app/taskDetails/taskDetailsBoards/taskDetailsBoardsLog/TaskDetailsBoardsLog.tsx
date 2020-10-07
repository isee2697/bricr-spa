import React, { useState } from 'react';
import { Card, CardContent, Tabs, Tab } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { TaskDetailsBoardsLogProps, TaskDetailsBoardsLogTab } from './TaskDetailsBoardsLog.types';
import { useStyles } from './TaskDetailsBoardsLog.styles';
import { TaskDetailsBoardsLogDiscussion } from './taskDetailsBoardsLogDiscussion/TaskDetailsBoardsLogDiscussion';

export const TaskDetailsBoardsLog = ({ task }: TaskDetailsBoardsLogProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(TaskDetailsBoardsLogTab.Discussion);

  return (
    <Card className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab value={TaskDetailsBoardsLogTab.Discussion} label={formatMessage({ id: 'tasks.details.discussion' })} />
        <Tab value={TaskDetailsBoardsLogTab.History} label={formatMessage({ id: 'tasks.details.history' })} />
      </Tabs>
      <CardContent className={classes.content}>
        {activeTab === TaskDetailsBoardsLogTab.Discussion && <TaskDetailsBoardsLogDiscussion />}
      </CardContent>
    </Card>
  );
};
