import { gql } from 'apollo-boost';

export const READ_NOTIFICATION = gql`
  mutation ReadNotification($input: ReadNotificationInput!) {
    readNotification(input: $input)
  }
`;

export const DELETE_NOTIFICATION = gql`
  mutation DeleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input)
  }
`;

export const BULK_READ_NOTIFICATIONS = gql`
  mutation BulkReadNotifications($input: BulkReadNotificationsInput!) {
    bulkReadNotifications(input: $input)
  }
`;

export const BULK_DELETE_NOTIFICATIONS = gql`
  mutation BulkDeleteNotifications($input: BulkDeleteNotificationsInput!) {
    bulkDeleteNotifications(input: $input)
  }
`;
