import { gql } from 'apollo-boost';

export const ADD_AOG_SPACE = gql`
  mutation AddAogSpace($input: AddAogSpaceInput!) {
    addAogSpace(input: $input) {
      newSpace {
        id
      }
    }
  }
`;

export const UPDATE_AOG_SPACE = gql`
  mutation UpdateAogSpace($input: UpdateAogSpaceInput!) {
    updateAogSpace(input: $input) {
      id
    }
  }
`;
