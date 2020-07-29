import { gql } from 'apollo-boost';

export const CREATE_NCP = gql`
  mutation CreateNcp($input: CreateNcpInput!) {
    createNcp(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP = gql`
  mutation updateNcp($input: UpdateNcpInput!) {
    updateNcp(input: $input) {
      id
    }
  }
`;
