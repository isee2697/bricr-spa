import { gql } from 'apollo-boost';

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    getNotifications {
      items {
        id
        type
        receiver
        isRead
        isDeleted
        description
        dateCreated
      }
    }
  }
`;
