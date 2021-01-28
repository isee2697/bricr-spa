import React, { useState } from 'react';

import {
  GetNotificationsDocument,
  useBulkDeleteNotificationsMutation,
  useBulkReadNotificationsMutation,
  useDeleteNotificationMutation,
  useGetNotificationsQuery,
  useReadNotificationMutation,
} from 'api/types';
import { Loader, Snackbar, Alert } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useAuthState } from 'hooks';

import { Notifications } from './Notifications';

export const NotificationsContainer = () => {
  const { formatMessage } = useLocale();
  const { user } = useAuthState();
  const { loading, error, data } = useGetNotificationsQuery({ fetchPolicy: 'no-cache', skip: !user });
  const [isSuccess, setSuccess] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<'read' | 'delete'>();
  const [deleteNotification] = useDeleteNotificationMutation();
  const [readNotification] = useReadNotificationMutation();
  const [bulkReadNotifications] = useBulkReadNotificationsMutation();
  const [bulkDeleteNotifications] = useBulkDeleteNotificationsMutation();

  const handleDeleteNotification = async (notificationId: string) => {
    const { data: result, errors } = await deleteNotification({
      variables: {
        input: {
          id: notificationId,
        },
      },
      refetchQueries: [
        {
          query: GetNotificationsDocument,
        },
      ],
    });

    if (!result || !result.deleteNotification || errors) {
      throw new Error();
    }

    setUpdateInfo('delete');
    setSuccess(true);
  };

  const handleReadNotification = async (notificationId: string) => {
    const { data: result, errors } = await readNotification({
      variables: {
        input: {
          id: notificationId,
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

    setUpdateInfo('read');
    setSuccess(true);
  };

  const handleBulkDeleteNotifications = async (notificationIds: string[]) => {
    const { data: result, errors } = await bulkDeleteNotifications({
      variables: {
        input: {
          ids: notificationIds,
        },
      },
      refetchQueries: [
        {
          query: GetNotificationsDocument,
        },
      ],
    });

    if (!result || !result.bulkDeleteNotifications || errors) {
      throw new Error();
    }

    setUpdateInfo('delete');
    setSuccess(true);
  };

  const handleBulkReadNotifications = async (notificationIds: string[]) => {
    const { data: result, errors } = await bulkReadNotifications({
      variables: {
        input: {
          ids: notificationIds,
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

    setUpdateInfo('read');
    setSuccess(true);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {isSuccess && (
        <Snackbar
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          open={isSuccess}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert variant="filled" severity="success">
            {formatMessage({ id: `notifications.${updateInfo}.success` })}
          </Alert>
        </Snackbar>
      )}
      <Notifications
        notifications={data?.getNotifications?.items || []}
        error={error}
        onReadNotification={handleReadNotification}
        onDeleteNotification={handleDeleteNotification}
        onBulkReadNotifications={handleBulkReadNotifications}
        onBulkDeleteNotifications={handleBulkDeleteNotifications}
      />
    </>
  );
};

export default NotificationsContainer;
