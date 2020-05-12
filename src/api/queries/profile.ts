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
