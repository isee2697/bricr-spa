import { gql } from 'apollo-boost';

export const UPDATE_PIM_GENERAL_INFO = gql`
  mutation UpdatePimGeneralInfo($input: PimGeneralInput!) {
    updatePimGeneralInfo(input: $input) {
      id
    }
  }
`;

export const ADD_IDENTIFICATION_NUMBER = gql`
  mutation AddIdentificationNumber($input: AddIdentificationNumberInput!) {
    addIdentificationNumber(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;

export const UDPATE_IDENTIFICATION_NUMBER = gql`
  mutation UpdateIdentificationNumber($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumber(input: $input) {
      id
    }
  }
`;
