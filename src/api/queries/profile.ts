import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  {
    me {
      firstName
      lastName
      email
      avatar
    }
  }
`;
