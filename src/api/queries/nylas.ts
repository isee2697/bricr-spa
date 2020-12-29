import { gql } from 'apollo-boost';

export const LIST_NYLAS_ACCOUNT = gql`
  query ListNylasAccount($isCalendarConnected: Boolean, $isEmailConnected: Boolean) {
    listNylasAccount(isCalendarConnected: $isCalendarConnected, isEmailConnected: $isEmailConnected) {
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
