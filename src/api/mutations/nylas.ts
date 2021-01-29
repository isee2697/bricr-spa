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
  mutation AuthorizeNylasAccountWithToken($input: NylasAddAccountInput!) {
    authorizeNylasAccountWithToken(input: $input)
      @rest(type: "CreateNylasAccount", path: "/nylas-addaccount", method: "POST", endpoint: "default") {
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
