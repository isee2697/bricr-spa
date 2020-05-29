import { gql } from 'apollo-boost';

export const CREATE_PIM = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input) {
      id
    }
  }
`;

export const UPDATE_PIM_GENERAL_INFO = gql`
  mutation UpdatePimGeneralInfo($input: PimGeneralInput!) {
    updatePimGeneralInfo(input: $input) {
      id
    }
  }
`;

export const ADD_FLOOR = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input) {
      floors {
        id
      }
    }
  }
`;

export const ADD_SPACE_TO_FLOOR = gql`
  mutation AddSpaceToFloor($input: AddSpaceInput!) {
    addSpaceToFloor(input: $input) {
      id
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

export const ADD_OUTSIDE_FEATURE = gql`
  mutation AddOutsideFeature($input: AddOutsideFeatureInput!) {
    addOutsideFeature(input: $input) {
      outsideFeatures {
        id
      }
    }
  }
`;

export const UPDATE_OUTSIDE_FEATURE = gql`
  mutation updateOutsideFeature($input: UpdateFeatureInputConfiguration!) {
    updateOutsideFeature(input: $input) {
      id
    }
  }
`;

export const UPDATE_OUTSIDE_INFO = gql`
  mutation UpdatePimOutsideInfo($input: PimOutsideInput!) {
    updatePimOutsideInfo(input: $input) {
      id
    }
  }
`;

export const ADD_CADASTRE = gql`
  mutation AddCadastre($input: AddCadastreInput!) {
    addCadastre(input: $input) {
      id
      cadastre {
        id
        type
      }
    }
  }
`;

export const UPDATE_CADASTRE = gql`
  mutation UpdateCadastre($input: UpdateCadastreInput!) {
    updateCadastre(input: $input) {
      id
    }
  }
`;

export const ADD_CADASTRE_MAPS = gql`
  mutation AddCadastreMaps($input: AddCadastreMapsInput!) {
    addCadastreMaps(input: $input) {
      id
    }
  }
`;

export const UPDATE_CADASTRE_MAP = gql`
  mutation UpdateMap($input: UpdateCadastreMapInput!) {
    updateMap(input: $input) {
      id
    }
  }
`;
