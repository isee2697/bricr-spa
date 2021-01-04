import { gql } from 'apollo-boost';

export const SEND_EMAIL = gql`
  mutation SendEmail($accountId: String!, $input: SendEmailInput!) {
    sendEmail(accountId: $accountId, input: $input)
  }
`;
