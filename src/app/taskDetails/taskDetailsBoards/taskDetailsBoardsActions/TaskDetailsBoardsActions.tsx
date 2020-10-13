import React from 'react';
import { Task, TaskLabel, TaskStatus } from 'api/types';
import { Paper, Emoji, Dropdown, UserAvatar, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { FollowUpRectangleIcon, LockRectangleIcon, UserRectangleIcon } from 'ui/atoms/icons';
import { AdvancedSearch } from 'ui/molecules/advancedSearch/AdvancedSearch';
import { AdvancedSearch as AdvancedSearchItem } from 'ui/molecules/advancedSearch/AdvancedSearch.types';

import { useStyles } from './TaskDetailsBoardsActions.style';
import { TaskDetailsBoardsActionsProps } from './TaskDetailsBoardsActions.types';

export const TaskDetailsBoardsActions = ({ task, user, members, onUpdateTask }: TaskDetailsBoardsActionsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const { id, status, assignee, label } = task;

  const statusItems: DropdownItem[] = [
    {
      label: (
        <span className={classes.status}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.ToDo,
    },
    {
      label: (
        <span className={classes.status}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.InProgress,
    },
    {
      label: (
        <span className={classes.status}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Blocked,
    },
    {
      label: (
        <span className={classes.status}>
          <Emoji>{`✅ ${formatMessage({ id: 'tasks.done' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Done,
    },
  ];

  const assignees: AdvancedSearchItem[] = [user, ...members].map((member, index) => ({
    key: member.id,
    title: `${member.firstName} ${member.lastName}${index === 0 && ` (${formatMessage({ id: 'tasks.members.me' })})`}`,
    icon: <UserAvatar name={`${member.firstName} ${member.lastName}`} className={classes.avagarIcon} />,
  }));

  const labels: DropdownItem[] = [
    {
      label: (
        <span className={classes.label}>
          <UserRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.business' })}
        </span>
      ),
      value: TaskLabel.Business,
    },
    {
      label: (
        <span className={classes.label}>
          <FollowUpRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.follow_up' })}
        </span>
      ),
      value: TaskLabel.FollowUp,
    },
    {
      label: (
        <span className={classes.label}>
          <LockRectangleIcon viewBox="0 0 20 20" /> {formatMessage({ id: 'tasks.label.private' })}
        </span>
      ),
      value: TaskLabel.Private,
    },
  ];

  const handleChange = (type: string, value: TaskStatus | string) => {
    onUpdateTask(id, { [type]: value } as Pick<Task, 'status' | 'assignee'>);
  };

  return (
    <Paper className={classes.root}>
      <Box>
        <Dropdown
          value={status}
          items={statusItems}
          placeholder="tasks.details.status"
          onChange={value => handleChange('status', value as TaskStatus)}
          align="left"
        />
      </Box>
      <Box className={classes.marginTopThree}>
        <AdvancedSearch
          inputItem={assignees.find(a => a.key === assignee)}
          label={formatMessage({ id: 'tasks.details.assignee' })}
          options={assignees}
          onChange={value => handleChange('assignee', value)}
        />
      </Box>
      <Box className={classes.marginTopThree}>
        <Typography variant="h5" className={classes.dropdownLabel}>
          {formatMessage({ id: 'tasks.details.label' })}
        </Typography>
        <Dropdown
          value={label}
          items={labels}
          placeholder="tasks.details.label"
          onChange={value => handleChange('label', value as string)}
          align="left"
        />
      </Box>
    </Paper>
  );
};
