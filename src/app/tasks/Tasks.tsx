import React, { useState } from 'react';
import { Grid, Alert, Snackbar } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { TasksProps, TeamMemberItem } from './Tasks.types';
import { useStyles } from './Tasks.styles';
import { TasksHeader } from './tasksHeader/TasksHeader';
import { TasksMemberList } from './tasksMemberList/TasksMemberList';
import { TasksBodyContainer } from './tasksBody/TasksBodyContainer';

export const Tasks = ({ error, members = [], user }: TasksProps) => {
  const [selectedMembers, setSelectedMembers] = useState<TeamMemberItem[]>([user]);
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);
  const classes = useStyles();
  const { open } = useModalDispatch();
  const { formatMessage } = useLocale();

  const teamMembers: TeamMemberItem[] = [user, ...members];

  return (
    <>
      {!!error && (
        <Snackbar
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          open={!!indicatorState}
          autoHideDuration={60000}
          onClose={() => setIndicatorState(undefined)}
        >
          <Alert severity="error">
            {formatMessage({ id: 'common.error' }, { message: error?.message?.replace('GraphQL error: ', '') })}
          </Alert>
        </Snackbar>
      )}
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <TasksHeader handleCreateTask={() => open('create-new-task', { members: teamMembers })} />
        </Grid>
        <Grid item xs={12}>
          <TasksMemberList
            members={teamMembers}
            selectedMembers={selectedMembers}
            onSelect={(selected: TeamMemberItem[]) => setSelectedMembers(selected)}
          />
        </Grid>
        <Grid item xs={12}>
          <TasksBodyContainer members={teamMembers} selectedMembers={selectedMembers} />
        </Grid>
      </Grid>
    </>
  );
};
