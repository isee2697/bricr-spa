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

export const OBJECT_TYPE_OVERALL_INFO = gql`
  query ObjectTypeOverallInfo($id: ID!, $projectId: ID!) {
    objectType: getObjectTypeGeneral(id: $id) {
      id
      name
    }
    project: getNcp(id: $projectId) {
      id
      name
    }
    linkedProperty: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
