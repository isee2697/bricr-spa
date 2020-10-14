import React from 'react';

import { Grid, Alert, Card, CardContent, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './Notifications.styles';
import { NotificationsProps } from './Notifications.types';
import { NotificationsList } from './notificationsList/NotificationsList';
import { NotificationsHeader } from './notificationsHeader/NotificationsHeader';

export const Notifications = ({
  notifications,
  error,
  onReadNotification,
  onDeleteNotification,
  onBulkReadNotifications,
  onBulkDeleteNotifications,
}: NotificationsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      {!!error && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={3} className={classes.content}>
        <Grid item xs={12}>
          <NotificationsHeader />
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.listWrapper}>
            <CardContent className={classes.listContent}>
              {notifications.length === 0 && (
                <InfoSection emoji="🎉">
                  <Typography variant="h3">{formatMessage({ id: 'notifications.empty_title' })}</Typography>
                  <Typography variant="h3">{formatMessage({ id: 'notifications.empty_description' })}</Typography>
                </InfoSection>
              )}
              {notifications.length > 0 && (
                <NotificationsList
                  notifications={notifications}
                  onReadNotification={onReadNotification}
                  onDeleteNotification={onDeleteNotification}
                  onBulkReadNotifications={onBulkReadNotifications}
                  onBulkDeleteNotifications={onBulkDeleteNotifications}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
