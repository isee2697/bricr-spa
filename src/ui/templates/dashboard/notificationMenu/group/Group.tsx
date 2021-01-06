import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { Box, IconButton, Typography, UserAvatar } from 'ui/atoms';
import { NotificationType } from 'api/types';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { FollowUpIcon } from 'ui/atoms/icons';

import { GroupProps, GroupItemProps } from './Group.types';
import { useStyles } from './Group.styles';

const TaskAssignedGroupItem = ({ data, onNavigate }: GroupItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const {
    id,
    title,
    createdBy: { firstName, lastName, image },
  } = data;

  return (
    <Box display="flex" onClick={() => onNavigate(AppRoute.taskDetails.replace(':id', id))}>
      <UserAvatar
        size="medium"
        avatar={image?.url || ''}
        name={`${firstName} ${lastName}`}
        className={classes.avatar}
      />
      <Box>
        <Typography variant="h6">2m ago</Typography>
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
      <IconButton
        className={classes.btnFollowUp}
        size="small"
        variant="rounded"
        onClick={() => onNavigate(AppRoute.taskDetails.replace(':id', id))}
      >
        <FollowUpIcon className={classes.followUpIcon} />
      </IconButton>
    </Box>
  );
};

export const Group = ({ group: { title, items }, onReadNotification }: GroupProps) => {
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

        return (
          <Box key={id} className={clsx(classes.row, isRead && 'disabled')}>
            {type === NotificationType.TaskAssigned && (
              <TaskAssignedGroupItem onNavigate={handleNavigate} data={data} dateCreated={dateCreated} />
            )}
          </Box>
        );
      })}
    </>
  );
};
