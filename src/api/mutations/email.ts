import { gql } from 'apollo-boost';

export const SEND_EMAIL = gql`
  mutation SendEmail($input: SendEmailInput!) {
    sendEmail(input: $input)
  }
`;
