import { gql } from 'apollo-boost';

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    getNotifications {
      items {
        id
        type
        receiver {
          id
          email
          isAdmin
          isActive
          image {
            url
          }
        }
        isRead
        isDeleted
        description
        dateCreated
      }
    }
  }
`;
