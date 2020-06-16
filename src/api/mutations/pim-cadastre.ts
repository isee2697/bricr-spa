import { gql } from 'apollo-boost';

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
    updateCadastreMap(input: $input) {
      id
    }
  }
`;
