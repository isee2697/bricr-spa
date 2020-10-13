import React from 'react';
import clsx from 'classnames';

import { Task, TaskLabel, TaskStatus } from 'api/types';
import { Paper, Emoji, SelectBox, UserAvatar, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { SelectBoxItem } from 'ui/atoms/selectBox/SelectBox.types';
import { FollowUpRectangleIcon, LockRectangleIcon, UserRectangleIcon } from 'ui/atoms/icons';
import { AdvancedSearch } from 'ui/molecules/advancedSearch/AdvancedSearch';
import { AdvancedSearch as AdvancedSearchItem } from 'ui/molecules/advancedSearch/AdvancedSearch.types';

import { useStyles } from './TaskDetailsBoardsActions.style';
import { TaskDetailsBoardsActionsProps } from './TaskDetailsBoardsActions.types';

export const TaskDetailsBoardsActions = ({ task, user, members, onUpdateTask }: TaskDetailsBoardsActionsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const { id, status, assignee, label } = task;

  const statusItems: SelectBoxItem[] = [
    {
      label: (
        <span className={clsx(classes.status, classes.backgroundBlue)}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.ToDo,
    },
    {
      label: (
        <span className={clsx(classes.status, classes.backgroundYellow)}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.InProgress,
    },
    {
      label: (
        <span className={clsx(classes.status, classes.backgroundRed)}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Blocked,
    },
    {
      label: (
        <span className={clsx(classes.status, classes.backgroundGreen)}>
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

  const labels: SelectBoxItem[] = [
    {
      label: (
        <span className={classes.label}>
          <UserRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.business' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.Business,
    },
    {
      label: (
        <span className={classes.label}>
          <FollowUpRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.follow_up' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.FollowUp,
    },
    {
      label: (
        <span className={classes.label}>
          <LockRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.private' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.Private,
    },
  ];

  const handleChange = (type: string, value: TaskStatus | string) => {
    onUpdateTask(id, { [type]: value } as Pick<Task, 'status' | 'assignee'>);
  };

  return (
    <Paper>
      <Box>
        <SelectBox
          value={status}
          items={statusItems}
          placeholder="tasks.details.status"
          showSelected={false}
          onChange={value => handleChange('status', value as TaskStatus)}
          align="left"
          classes={{
            input: classes.dropdown,
            inputInner:
              status === TaskStatus.ToDo
                ? classes.backgroundBlue
                : status === TaskStatus.InProgress
                ? classes.backgroundYellow
                : status === TaskStatus.Blocked
                ? classes.backgroundRed
                : classes.backgroundGreen,
            menu: classes.dropdownMenu,
            menuItem: classes.dropdownMenuItem,
          }}
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
        <SelectBox
          title={formatMessage({ id: 'tasks.details.label' })}
          value={label}
          items={labels}
          placeholder="tasks.details.label"
          onChange={value => handleChange('label', value as string)}
          align="left"
          showSelected={false}
          classes={{
            input: classes.labelDropdown,
            inputInner: classes.labelDropdownInner,
            menu: classes.dropdownMenu,
            menuItem: classes.labelDropdownMenuItem,
            menuItemInner: classes.labelDropdownMenuItemInner,
          }}
        />
      </Box>
    </Paper>
  );
};
