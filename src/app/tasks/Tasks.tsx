import React, { useState } from 'react';

import { Grid } from 'ui/atoms';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { TasksProps, TeamMemberItem } from './Tasks.types';
import { useStyles } from './Tasks.styles';
import { TasksHeader } from './tasksHeader/TasksHeader';
import { TasksMemberList } from './tasksMemberList/TasksMemberList';
import { TasksBodyContainer } from './tasksBody/TasksBodyContainer';

export const Tasks = ({ members = [], user }: TasksProps) => {
  const [selectedMembers, setSelectedMembers] = useState<TeamMemberItem[]>([user]);
  const classes = useStyles();
  const { open } = useModalDispatch();

  const teamMembers: TeamMemberItem[] = [user, ...members];

  return (
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
  );
};
