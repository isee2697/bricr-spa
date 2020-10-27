import React, { useState } from 'react';

import { Card, CardContent, Tab, Tabs } from 'ui/atoms';
import { useLocale } from 'hooks';

import { TaskDetailsBoardsResultTab } from './TaskDetailsBoardsResult.types';
import { useStyles } from './TaskDetailsBoardsResult.styles';
import { TaskDetailsBoardsResultIntern } from './taskDetailsBoardsResultIntern/TaskDetailsBoardsResultIntern';

export const TaskDetailsBoardsResult = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(TaskDetailsBoardsResultTab.ResultIntern);

  return (
    <Card className={classes.root}>
      <Tabs
        value={activeTab}
        onChange={(e, value) => setActiveTab(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          value={TaskDetailsBoardsResultTab.ResultIntern}
          label={formatMessage({ id: `tasks.details.result_intern` })}
        />
        <Tab
          value={TaskDetailsBoardsResultTab.ResultClient}
          label={formatMessage({ id: `tasks.details.result_client` })}
        />
      </Tabs>
      <CardContent className={classes.content}>
        {activeTab === TaskDetailsBoardsResultTab.ResultIntern && <TaskDetailsBoardsResultIntern />}
      </CardContent>
    </Card>
  );
};
