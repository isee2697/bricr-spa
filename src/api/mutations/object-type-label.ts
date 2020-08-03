import { gql } from 'apollo-boost';

export const ADD_OBJECT_TYPE_LABEL = gql`
  mutation AddObjectTypeLabel($input: LabelInput!) {
    addObjectTypeLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
