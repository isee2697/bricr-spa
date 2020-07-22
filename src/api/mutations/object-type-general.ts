import { gql } from 'apollo-boost';

export const CREATE_OBJECT_TYPE = gql`
  mutation CreateObjectType($input: CreateObjectTypeInput!) {
    createObjectType(input: $input) {
      name
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      ncpId
    }
  }
`;
