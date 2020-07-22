import { gql } from 'apollo-boost';

export const PIM_OBJECT_TYPE_GENERAL = gql`
  query GetObjectTypeGeneral($id: ID!) {
    getObjectTypeGeneral(id: $id) {
      id
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
