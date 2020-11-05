import { gql } from 'apollo-boost';

export const GET_TIARA_MUTATIONS = gql`
  query GetTiaraMutations($entityId: ID!, $entity: TiaraEntities!) {
    getTiaraMutations(entityId: $entityId, entity: $entity) {
      id
      status
      errors
      messageType
      date
    }
  }
`;
