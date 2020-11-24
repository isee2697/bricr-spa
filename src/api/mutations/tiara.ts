import { gql } from 'apollo-boost';

export const TIARA_SEND_MESSAGE = gql`
  mutation TiaraSendMessage($input: TiaraSendMessageInput!) {
    tiaraSendMessage(input: $input)
  }
`;
