import React, { useState, useEffect } from 'react';

import { Grid, Alert, Loader } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { TasksProps, TeamMemberItem } from './Tasks.types';
import { useStyles } from './Tasks.styles';
import { TasksHeader } from './tasksHeader/TasksHeader';
import { TasksMemberList } from './tasksMemberList/TasksMemberList';
import { TasksBody } from './tasksBody/TasksBody';
import { CreateNewTaskModalContainer } from './createNewTaskModal/CreateNewTaskModalContainer';

export const Tasks = ({ error, loading, data }: TasksProps) => {
  const [selectedMembers, setSelectedMembers] = useState<TeamMemberItem[]>([]);
  const { user } = useAuthState();
  const classes = useStyles();
  const { open } = useModalDispatch();
  const { formatMessage } = useLocale();

  useEffect(() => {
    if (user) {
      setSelectedMembers([user]);
    }
  }, [user]);

  if (loading || !user || !data) {
    return <Loader />;
  }

  const members: TeamMemberItem[] = [user, ...(data.members.items || [])];

  return (
    <>
      {!!error && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <TasksHeader handleCreateTask={() => open('create-new-task', { members })} />
        </Grid>
        <Grid item xs={12}>
          <TasksMemberList
            members={members}
            selectedMembers={selectedMembers}
            onSelect={(selected: TeamMemberItem[]) => setSelectedMembers(selected)}
          />
        </Grid>
        <Grid item xs={12}>
          <TasksBody />
        </Grid>
      </Grid>
      <CreateNewTaskModalContainer members={members} />
    </>
  );
};
