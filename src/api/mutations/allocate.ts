import { gql } from 'apollo-boost';

export const ADD_ALLOCATE = gql`
  mutation AddAllocate($objectId: ID!, $input: AddAllocateInput!) {
    addAllocate(objectId: $objectId, input: $input) {
      id
    }
  }
`;

export const UPDATE_ALLOCATE = gql`
  mutation UpdateAllocate($id: ID!, $input: AllocateInput!) {
    updateAllocate(id: $id, input: $input) {
      id
    }
  }
`;

export const DELETE_ALLOCATE = gql`
  mutation DeleteAllocate($id: ID!) {
    deleteAllocate(id: $id)
  }
`;
