import { gql } from 'apollo-boost';

export const DELETE_ENTITY = gql`
  mutation DeleteEntity($input: DeleteEntityInput!) {
    deleteEntity(input: $input) {
      successful
      message
      undoId
    }
  }
`;

export const UNDO_ENTITY = gql`
  mutation UndoEntity($input: UndoEntityInput!) {
    undoEntity(input: $input) {
      successful
      entityId
    }
  }
`;
