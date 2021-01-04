import { gql } from 'apollo-boost';

export const AUTHORIZE_NYLAS_ACCOUNT = gql`
  mutation AuthorizeNylasAccount($input: NylasAuthorizationInput!, $isCalendarConnected: Boolean) {
    authorizeNylasAccount(input: $input, isCalendarConnected: $isCalendarConnected)
  }
`;

export const AUTHORIZE_NYLAS_ACCOUNT_WITH_TOKEN = gql`
  mutation AuthorizeNylasAccountWithToken($nylasToken: String!, $isCalendarConnected: Boolean) {
    authorizeNylasAccountWithToken(nylasToken: $nylasToken, isCalendarConnected: $isCalendarConnected)
  }
`;
