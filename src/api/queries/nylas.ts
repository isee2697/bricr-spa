import { gql } from 'apollo-boost';

export const LIST_NYLAS_ACCOUNT = gql`
  query ListNylasAccount($isCalendarConnected: Boolean) {
    listNylasAccount(isCalendarConnected: $isCalendarConnected) {
      id
      email
      provider
      billingState
      syncState
    }
  }
`;

export const GET_NYLAS_AUTH_URL = gql`
  query GetNylasAuthUrl($input: NylasAccountAuthOptions!) {
    getNylasAuthUrl(input: $input)
  }
`;
