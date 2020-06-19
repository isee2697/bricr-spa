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
