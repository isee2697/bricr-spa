import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  query Me {
    me {
      firstName
      lastName
      email
      avatar
    }
  }
`;
