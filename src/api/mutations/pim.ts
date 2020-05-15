import { gql } from 'apollo-boost';

export const CREATE_PIM = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input)
  }
`;

export const UPDATE_PIM = gql`
  mutation UpdatePim($input: UpdatePimInput!) {
    updatePim(input: $input)
  }
`;

export const UPDATE_PIM_GENERAL_INFO = gql`
  mutation UpdatePimGeneralInfo($input: PimGeneralInput!) {
    updatePimGeneralInfo(input: $input)
  }
`;

export const ADD_FLOOR = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input)
  }
`;

export const ADD_SPACE_TO_FLOOR = gql`
  mutation AddSpaceToFloor($input: AddSpaceInput!) {
    addSpaceToFloor(input: $input)
  }
`;
