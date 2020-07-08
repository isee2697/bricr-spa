import { gql } from 'apollo-boost';

export const CREATE_NCP = gql`
  mutation CreateNcp($input: CreateNcpInput!) {
    createNcp(input: $input) {
      id
    }
  }
`;
