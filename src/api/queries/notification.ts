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
        createdBy {
          id
          firstName
          lastName
          image {
            url
          }
        }
        linkedEntity {
          id
          type
        }
        isRead
        isDeleted
        description
        dateCreated
      }
    }
  }
`;
