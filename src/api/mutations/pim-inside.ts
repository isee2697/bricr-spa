import { gql } from 'apollo-boost';

export const ADD_FLOOR = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input) {
      newFloor {
        id
      }
    }
  }
`;

export const ADD_SPACE_TO_FLOOR = gql`
  mutation AddSpaceToFloor($input: AddSpaceInput!) {
    addSpaceToFloor(input: $input) {
      pim {
        id
      }
      newSpace {
        id
      }
    }
  }
`;

export const UPDATE_SPACE = gql`
  mutation UpdateSpace($input: UpdateSpaceInput!) {
    updateSpace(input: $input) {
      id
    }
  }
`;

export const UPDATE_FLOOR = gql`
  mutation UpdateFloor($input: UpdateFloorInput!) {
    updateFloor(input: $input) {
      id
    }
  }
`;

export const UPDATE_INSIDE_GENERAL = gql`
  mutation UPDATEInsideGeneral($input: InsideGeneralInput!) {
    updateInsideGeneral(input: $input) {
      id
    }
  }
`;
