import { gql } from 'apollo-boost';

export const UPDATE_OBJECT_TYPE_LIST_DESCRIPTION = gql`
  mutation UpdateObjectTypesListDescription($input: UpdateObjectTypesListDescription!) {
    updateObjectTypesListDescription(input: $input) {
      id
    }
  }
`;
