import { gql } from 'apollo-boost';

export const ADD_PIM_IDENTIFICATION_NUMBER = gql`
  mutation AddIdentificationNumberPim($input: AddIdentificationNumberInput!) {
    addIdentificationNumberPim(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;

export const UDPATE_PIM_IDENTIFICATION_NUMBER = gql`
  mutation UpdateIdentificationNumberPim($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumberPim(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_IDENTIFICATION_NUMBER = gql`
  mutation AddIdentificationNumberNcp($input: AddIdentificationNumberInput!) {
    addIdentificationNumberNcp(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;

export const UDPATE_NCP_IDENTIFICATION_NUMBER = gql`
  mutation UpdateIdentificationNumberNcp($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumberNcp(input: $input) {
      id
    }
  }
`;
