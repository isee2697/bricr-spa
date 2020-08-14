import { gql } from 'apollo-boost';

export const ADD_COMMERCIAL_SPACE = gql`
  mutation AddBogSpace($input: AddBogSpaceInput!) {
    addBogSpace(input: $input) {
      newSpace {
        id
        type
        name
      }
    }
  }
`;

export const UPDATE_COMMERCIAL_SPACES = gql`
  mutation UpdateBogSpace($input: UpdateBogSpaceInput!) {
    updateBogSpace(input: $input) {
      id
    }
  }
`;
