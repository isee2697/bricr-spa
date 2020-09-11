import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($from: Int!, $limit: Int, $search: String) {
    getAllProfiles(search: $search, pagination: { from: $from, limit: $limit }) {
      items {
        id
        firstName
        lastName
        email
        avatar
        functionDescription
        teams {
          id
          name
        }
      }
    }
  }
`;

export const GET_USERS_COUNT = gql`
  query GetUsersCount {
    getAllProfiles {
      metadata {
        total
      }
    }
  }
`;
