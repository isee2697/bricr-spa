import { gql } from 'apollo-boost';

export const ADD_NCP_LABEL = gql`
  mutation AddNcpLabel($input: NcpLabelInput!) {
    addNcpLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
