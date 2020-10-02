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
