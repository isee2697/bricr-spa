import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { Menu, Box, Typography, Badge, IconButton, Emoji, Button } from 'ui/atoms';
import { BellIcon } from 'ui/atoms/icons/bell/BellIcon';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';
import { useLocale } from 'hooks/useLocale/useLocale';
import {
  GetNotificationsDocument,
  useBulkReadNotificationsMutation,
  useGetNotificationsQuery,
  useReadNotificationMutation,
} from 'api/types';

import { useStyles } from './NotificationMenu.styles';
import { NotificationRow, NotificationsGroupObject } from './NotificationMenu.types';
import { Group } from './group/Group';

export const NotificationMenu = () => {
  const { data } = useGetNotificationsQuery({ fetchPolicy: 'no-cache' });
  const [readNotification] = useReadNotificationMutation();
  const [bulkReadNotifications] = useBulkReadNotificationsMutation();
  const { push } = useHistory();

  const [isOpened, setOpened] = useState(false);
  const setOverlay = useOverlayDispatch();
  const menuRef = useRef(null);
  const classes = useStyles();
  const { formatMessage } = useLocale();

  useEffect(() => {
    setOverlay(isOpened);
  }, [isOpened, setOverlay]);

  const getNotificationGroup = (notifications: NotificationRow[]) => {
    const today = DateTime.local().toFormat('dd-MM-yyyy');
    const yesterday = DateTime.local()
      .minus({ day: 1 })
      .toFormat('dd-MM-yyyy');

    const groups: NotificationsGroupObject = notifications
      .slice()
      .sort((n1, n2) => (n1.dateCreated > n2.dateCreated ? 1 : -1))
      .reduce((accum: NotificationsGroupObject, notification: NotificationRow) => {
        const date = DateTime.fromISO(notification.dateCreated).toFormat('dd-MM-yyyy');

        if (!accum[date]) {
          accum[date] = [];
        }
        accum[date].push(notification);

        return accum;
      }, {});

    return Object.keys(groups).map(date => {
      return {
        title:
          today === date
            ? formatMessage({ id: 'date.today' })
            : yesterday === date
            ? formatMessage({ id: 'date.yesterday' })
            : date,
        items: groups[date],
      };
    });
  };

  const handleReadNotification = async (id: string) => {
    const { data: result, errors } = await readNotification({
      variables: {
        input: {
          id,
        },
      },
      refetchQueries: [
        {
          query: GetNotificationsDocument,
        },
      ],
    });

    if (!result || !result.readNotification || errors) {
      throw new Error();
    }
  };

  const handleReadAllNotifications = async () => {
    const notifications: NotificationRow[] = data?.getNotifications?.items || [];
    const { data: result, errors } = await bulkReadNotifications({
      variables: {
        input: {
          ids: notifications.map(notification => notification.id),
        },
      },
      refetchQueries: [
        {
          query: GetNotificationsDocument,
        },
      ],
    });

    if (!result || !result.bulkReadNotifications || errors) {
      throw new Error();
    }
  };

  const handleNavigate = (path: string) => {
    setOpened(false);
    push(path);
  };

  return (
    <>
      <IconButton
        size="small"
        variant="roundedContained"
        onClick={() => setOpened(v => !v)}
        onKeyDown={() => setOpened(v => !v)}
        innerRef={menuRef}
        aria-controls="notifications-menu"
        aria-label="notifications"
        aria-haspopup="true"
        id="notifications-menu-button"
        className={classNames(classes.notification, isOpened ? classes.activeNotificationIcon : '')}
      >
        <Badge
          badgeContent={data?.getNotifications?.items?.filter(notification => !notification.isRead).length || 0}
          color="secondary"
        >
          <BellIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notifications-menu"
        open={isOpened}
        onClose={() => setOpened(false)}
        anchorEl={menuRef.current}
        placement="bottom-end"
        arrow
        offsetTop={3}
        role="menu"
        aria-labelledby="notifications-menu-button"
        actions={
          <Button fullWidth color="primary" onClick={() => handleNavigate('/notifications')}>
            {formatMessage({ id: 'notifications.menu.view_all' })}
          </Button>
        }
      >
        <Box className={classes.notificationsMenu} onClick={() => setOpened(false)}>
          <Box
            className={classes.notificationMenuHeader}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3">{formatMessage({ id: 'notifications.title' })}</Typography>
            {data?.getNotifications?.items && data.getNotifications.items.length > 0 && (
              <Button color="primary" className={classes.btnMarkAllRead} onClick={handleReadAllNotifications}>
                {formatMessage({ id: 'notifications.menu.mark_all_as_read' })}
              </Button>
            )}
          </Box>
          {data?.getNotifications?.items && data.getNotifications.items.length > 0 ? (
            <>
              {getNotificationGroup(data.getNotifications.items).map((group, index) => (
                <Group key={index} group={group} onReadNotification={handleReadNotification} />
              ))}
            </>
          ) : (
            <>
              <Box className={classes.emptyNotificationsImage}>
                <Emoji className={classes.emptyNotificationsImageEmo} children="🎉" />
              </Box>
              <Box className={classes.emptyNotificationsText}>
                <p>{formatMessage({ id: 'notifications.emptyMessage.line1' })}</p>
                <p>{formatMessage({ id: 'notifications.emptyMessage.line2' })}</p>
              </Box>
            </>
          )}
        </Box>
      </Menu>
    </>
  );
};
