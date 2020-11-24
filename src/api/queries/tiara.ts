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

export const GET_TIARA_VALIDATION = gql`
  query GetTiaraValidation($entityId: ID!, $entity: TiaraEntities!) {
    getTiaraValidation(entityId: $entityId, entity: $entity) {
      errors
    }
  }
`;
