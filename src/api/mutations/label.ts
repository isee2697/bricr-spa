import { gql } from 'apollo-boost';

export const ADD_LABEL = gql`
  mutation AddLabel($input: LabelInput!) {
    addLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;

export const ADD_CRM_LABEL = gql`
  mutation AddCrmLabel($input: LabelInput!) {
    addCrmLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
