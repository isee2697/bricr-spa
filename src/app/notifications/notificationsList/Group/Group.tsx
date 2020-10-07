import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Checkbox, IconButton, Typography, UserAvatar } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { DeleteIcon, FollowUpIcon } from 'ui/atoms/icons';
import { NotificationType } from 'api/types';

import { useStyles } from './Group.styles';
import { GroupProps, TaskAssignedNotificationGroupItemProps } from './Group.types';

const TaskAssignedNotificationsGroupItem = ({ data, onNavigate }: TaskAssignedNotificationGroupItemProps) => {
  const {
    id,
    title,
    createdBy: { firstName, lastName },
  } = data;
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box display="flex" width="100%">
      <Box>
        <UserAvatar size="medium" name={`${firstName} ${lastName}`} className={classes.avatar} />
      </Box>
      <Box>
        <Box display="flex">
          <Typography variant="h6" className={clsx(classes.createdAt, classes.fontWeightMedium)}>
            2m ago
          </Typography>
          <IconButton
            size="small"
            variant="rounded"
            onClick={() => onNavigate(AppRoute.taskDetails.replace(':id', id))}
            className={classes.btnFollowUp}
          >
            <FollowUpIcon className={classes.followUpIcon} />
          </IconButton>
        </Box>
        <Typography variant="h5">
          {formatMessage(
            { id: 'notifications.list_item.task_assigned' },
            {
              user: (
                <Box component="span" className={classes.fontWeightBold}>
                  {firstName} {lastName}
                </Box>
              ),
              title: (
                <Box component="span" className={classes.fontWeightBold}>
                  {title}
                </Box>
              ),
            },
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export const Group = ({
  group: { title, items },
  checkedKeys,
  onCheck,
  onReadNotification,
  onDeleteNotification,
}: GroupProps) => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleNavigate = (path: string) => {
    push(path);
  };

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
      {items.map(item => {
        const { id, type, description, isRead, dateCreated } = item;
        const data = JSON.parse(description);
        const checked = checkedKeys.includes(id);

        return (
          <Box key={id} className={clsx(classes.row, checked && 'checked')}>
            <Checkbox
              color="primary"
              className={classes.checkbox}
              checked={checked}
              disabled={isRead}
              onChange={() => onCheck(id)}
            />
            <Box
              className={clsx(classes.rowContent, isRead && 'disabled')}
              width="100%"
              onClick={() => !isRead && onReadNotification(id)}
            >
              {type === NotificationType.TaskAssigned && (
                <TaskAssignedNotificationsGroupItem data={data} dateCreated={dateCreated} onNavigate={handleNavigate} />
              )}
            </Box>
            <IconButton size="small" variant="rounded" onClick={() => onDeleteNotification(id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      })}
    </>
  );
};
