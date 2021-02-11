import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Checkbox } from 'ui/atoms';
import { useSelect } from 'ui/molecules/list/useSelect/useSelect';
import { Notification } from 'api/types';

import { useStyles } from './NotificationsList.styles';
import {
  NotificationsGroup,
  NotificationsGroupObject,
  NotificationsListProps,
  NotificationsListSortOption,
} from './NotificationsList.types';
import { NotificationsListHeader } from './notificationsListHeader/NotificationsListHeader';
import { Group } from './Group/Group';

export const NotificationsList = ({
  notifications,
  onReadNotification,
  onDeleteNotification,
  onBulkReadNotifications,
  onBulkDeleteNotifications,
  className,
  loading,
  loadingItem,
  disabled,
}: NotificationsListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { checkedKeys, checkAllStatus, handleCheck, handleCheckAll, handleClearAll } = useSelect(
    notifications,
    'id',
    disabled,
  );

  const sortOptions: NotificationsListSortOption[] = [
    {
      name: formatMessage({ id: 'notifications.sort_options.newest' }),
      key: 'newest',
    },
  ];

  const getNotificationGroups = (notifications: Notification[]) => {
    const today = DateTime.local().toFormat('dd-MM-yyyy');
    const yesterday = DateTime.local()
      .minus({ day: 1 })
      .toFormat('dd-MM-yyyy');

    const groups: NotificationsGroupObject = notifications.reduce(
      (accum: NotificationsGroupObject, notification: Notification) => {
        const date = DateTime.fromISO(notification.dateCreated).toFormat('dd-MM-yyyy');

        if (!accum[date]) {
          accum[date] = [];
        }
        accum[date].push(notification);

        return accum;
      },
      {},
    );

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

  const notificationsGroups: NotificationsGroup[] = getNotificationGroups(notifications);

  const handleSort = (key: string) => {};
  const handleBulkReadNotifications = () => {
    if (checkedKeys.length > 0) {
      onBulkReadNotifications(checkedKeys);
    } else {
      onBulkReadNotifications(notifications.map(notification => notification.id));
    }
    handleClearAll();
  };

  const handleBulkDeleteNotifications = () => {
    if (checkedKeys.length > 0) {
      onBulkDeleteNotifications(checkedKeys);
    } else {
      onBulkDeleteNotifications(notifications.map(notification => notification.id));
    }
    handleClearAll();
  };

  return (
    <Box className={clsx(classes.root, className)}>
      <NotificationsListHeader
        sortOptions={sortOptions}
        checkedKeys={checkedKeys}
        checkAllStatus={checkAllStatus}
        onCheckAll={handleCheckAll}
        onSort={handleSort}
        onBulkReadNotifications={handleBulkReadNotifications}
        onBulkDeleteNotifications={handleBulkDeleteNotifications}
      />
      {!loading &&
        notificationsGroups.length > 0 &&
        notificationsGroups.map((group, index) => (
          <Group
            key={index}
            group={group}
            checkedKeys={checkedKeys}
            onCheck={handleCheck}
            onReadNotification={onReadNotification}
            onDeleteNotification={onDeleteNotification}
          />
        ))}
      {loading && loadingItem && (
        <>
          {Array.from({ length: 3 }).map((i, k) => (
            <div className={classes.loading} key={k}>
              <Checkbox color="primary" className={classes.checkbox} disabled checked={false} />
              {loadingItem}
            </div>
          ))}
        </>
      )}
    </Box>
  );
};
