import { gql } from 'apollo-boost';

export const LIST_PROJECT_PHASE = gql`
  query ProjectPhases($name: String, $ncpId: ID, $from: Int!, $limit: Int) {
    getProjectPhases(filters: { name: $name, ncpId: $ncpId }, pagination: { from: $from, limit: $limit }) {
      items {
        id
        name
        logo {
          id
          fileName
          description
          status
          fileType
          permission
          key
          createdAt
          signedUrl
          url
          bucket
          entityID
          entity
        }
        ncpIds
      }
    }
  }
`;
