import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import robotImage from 'assets/images/robot.jpg';
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
  const { title, createdBy, linkedEntity } = data;

  const name = createdBy && `${createdBy.firstName} ${createdBy.lastName}`;

  const image = name ? createdBy?.image?.url : robotImage;

  return (
    <Box display="flex" onClick={() => onNavigate(AppRoute.taskDetails.replace(':id', linkedEntity?.id ?? ''))}>
      <UserAvatar size="medium" avatar={image || undefined} name={name || ''} className={classes.avatar} />
      <Box>
        <Typography variant="h6">2m ago</Typography>
        <Typography variant="h5">
          {formatMessage(
            { id: 'notifications.list_item.task_assigned' },
            {
              user: (
                <Box component="span" className={classes.fontWeightBold}>
                  {name}
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
        onClick={() => onNavigate(AppRoute.taskDetails.replace(':id', linkedEntity?.id ?? ''))}
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
        const { id, type, description, isRead, dateCreated, createdBy, linkedEntity } = item;

        return (
          <Box key={id} className={clsx(classes.row, isRead && 'disabled')}>
            {type === NotificationType.TaskAssigned && (
              <TaskAssignedGroupItem
                onNavigate={handleNavigate}
                data={{ title: description, createdBy, linkedEntity }}
                dateCreated={dateCreated}
              />
            )}
          </Box>
        );
      })}
    </>
  );
};
