import React, { useState } from 'react';
import clsx from 'classnames';

import { LabelProperty, Task, TaskLabel, TaskStatus } from 'api/types';
import { Paper, Emoji, SelectBox, UserAvatar, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { SelectBoxItem } from 'ui/atoms/selectBox/SelectBox.types';
import { FollowUpRectangleIcon, LockRectangleIcon, UserRectangleIcon, AddIcon } from 'ui/atoms/icons';
import { AdvancedSearch } from 'ui/molecules/advancedSearch/AdvancedSearch';
import { AdvancedSearchItem } from 'ui/molecules/advancedSearch/AdvancedSearch.types';
import { AddCustomTaskLabelModalContainer } from '../addCustomTaskLabelModal/AddCustomTaskLabelModalContainer';

import { useStyles } from './TaskDetailsBoardsActions.style';
import { TaskDetailsBoardsActionsProps } from './TaskDetailsBoardsActions.types';

export const TaskDetailsBoardsActions = ({ task, user, members, onUpdateTask }: TaskDetailsBoardsActionsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [isModalOpened, setModalOpened] = useState(false);

  const { id, status, assignee, label } = task;

  const statusItems: SelectBoxItem[] = [
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.ToDo,
      color: 'blue',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.InProgress,
      color: 'yellow',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Blocked,
      color: 'red',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`✅ ${formatMessage({ id: 'tasks.done' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Done,
      color: 'green',
    },
  ];

  const assignees: AdvancedSearchItem[] = [user, ...members].map((member, index) => ({
    label: `${member.firstName} ${member.lastName}${index === 0 && ` (${formatMessage({ id: 'tasks.members.me' })})`}`,
    value: member.id,
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
    {
      label: (
        <span className={classes.label}>
          <span className={classes.labelIcon}>
            <AddIcon />
          </span>
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.own' })}
          </Typography>
        </span>
      ),
      value: 'custom',
    },
  ];

  const handleChange = (type: string, value: TaskStatus | string) => {
    onUpdateTask(id, { [type]: value } as Pick<Task, 'status' | 'assignee'>);
  };

  const handleChangeLabel = (value: string) => {
    if (value === TaskLabel.Business || value === TaskLabel.FollowUp || value === TaskLabel.Private) {
      onUpdateTask(id, { label: value });
    } else {
      setModalOpened(true);
    }
  };

  return (
    <>
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
              inputInner: clsx(
                status === TaskStatus.ToDo
                  ? classes.backgroundBlue
                  : status === TaskStatus.InProgress
                  ? classes.backgroundYellow
                  : status === TaskStatus.Blocked
                  ? classes.backgroundRed
                  : classes.backgroundGreen,
                classes.dropdownInner,
              ),
              menu: classes.dropdownMenu,
              menuItem: classes.dropdownMenuItem,
              menuItemInner: classes.dropdownMenuItemInner,
            }}
          />
        </Box>
        <Box className={classes.marginTopOneHalf}>
          <AdvancedSearch
            title={formatMessage({ id: 'tasks.details.assignee' })}
            items={assignees}
            placeholder=""
            value={assignee}
            onChange={value => handleChange('assignee', value as TaskStatus)}
          />
        </Box>
        <Box>
          <SelectBox
            title={formatMessage({ id: 'tasks.details.label' })}
            value={label}
            items={labels}
            placeholder="tasks.details.label"
            onChange={value => handleChangeLabel(value as string)}
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
      {isModalOpened && (
        <AddCustomTaskLabelModalContainer
          isOpened={isModalOpened}
          property={LabelProperty.Task}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};
