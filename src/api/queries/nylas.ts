import { gql } from 'apollo-boost';

export const LIST_NYLAS_ACCOUNT = gql`
  query ListNylasAccount($isCalendarConnected: Boolean, $isEmailConnected: Boolean) {
    listNylasAccount(isCalendarConnected: $isCalendarConnected, isEmailConnected: $isEmailConnected)
      @rest(type: "NylasAccount", path: "/nylas-account-list", method: "GET", endpoint: "default") {
      id
      email
      provider
      billingState
      syncState
      isCalendarConnected
      isEmailConnected
    }
  }
`;

export const GET_NYLAS_AUTH_URL = gql`
  query GetNylasAuthUrl($input: NylasAccountAuthOptions!) {
    getNylasAuthUrl(input: $input)
  }
`;
