import { gql } from 'apollo-boost';

export const AUTHORIZE_NYLAS_ACCOUNT = gql`
  mutation AuthorizeNylasAccount(
    $input: NylasAuthorizationInput!
    $isCalendarConnected: Boolean
    $isEmailConnected: Boolean
  ) {
    authorizeNylasAccount(input: $input, isCalendarConnected: $isCalendarConnected, isEmailConnected: $isEmailConnected)
  }
`;

export const AUTHORIZE_NYLAS_ACCOUNT_WITH_TOKEN = gql`
  mutation AuthorizeNylasAccountWithToken(
    $nylasToken: String!
    $isCalendarConnected: Boolean
    $isEmailConnected: Boolean
  ) {
    authorizeNylasAccountWithToken(
      nylasToken: $nylasToken
      isCalendarConnected: $isCalendarConnected
      isEmailConnected: $isEmailConnected
    ) {
      id
      userId
      accountId
      accessToken
      newAccount
      isCalendarConnected
      isEmailConnected
    }
  }
`;
