import { gql } from 'apollo-boost';

export const GET_BILLING = gql`
  query GetBilling {
    getBilling {
      url
    }
  }
`;
